import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { TLighthouseResult, TLighthouseReport } from './types';

export class LighthouseService {
  private static async launchChrome() {
    return await chromeLauncher.launch({
      chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
    });
  }

  static async runAudit(url: string): Promise<TLighthouseResult> {
    const chrome = await this.launchChrome();
    
    try {
      const options = {
        logLevel: 'info' as const,
        output: 'json' as const,
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
      };

      const runnerResult = await lighthouse(url, options);
      const report = runnerResult?.lhr;

      if (!report) {
        throw new Error('Failed to generate Lighthouse report');
      }

      return report as unknown as TLighthouseResult;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('timeout')) {
          throw new Error('The website took too long to load. Please try again or check if the website is accessible.');
        }
        if (error.message.includes('ERR_NAME_NOT_RESOLVED')) {
          throw new Error('The website URL could not be found. Please check the URL and try again.');
        }
        if (error.message.includes('ERR_CONNECTION_REFUSED')) {
          throw new Error('The website is not accessible. Please check if the website is online.');
        }
      }
      throw error;
    } finally {
      await chrome.kill();
    }
  }

  static generatePlainLanguageReport(result: TLighthouseResult): TLighthouseReport {
    const { categories } = result;
    
    // Calculate overall score
    const scores = [
      categories.performance.score,
      categories.accessibility.score,
      categories['best-practices'].score,
      categories.seo.score
    ];
    const overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 100);

    // Generate category summaries and recommendations
    const performance = this.generateCategoryReport(categories.performance, 'performance');
    const accessibility = this.generateCategoryReport(categories.accessibility, 'accessibility');
    const bestPractices = this.generateCategoryReport(categories['best-practices'], 'best-practices');
    const seo = this.generateCategoryReport(categories.seo, 'seo');

    // Generate executive summary
    const executiveSummary = this.generateExecutiveSummary({
      performance,
      accessibility,
      bestPractices,
      seo
    }, overallScore);

    // Generate priority actions
    const priorityActions = this.generatePriorityActions({
      performance,
      accessibility,
      bestPractices,
      seo
    });

    return {
      url: result.requestedUrl,
      timestamp: result.fetchTime,
      overallScore,
      categories: {
        performance,
        accessibility,
        bestPractices,
        seo
      },
      executiveSummary,
      priorityActions
    };
  }

  private static generateCategoryReport(category: any, categoryName: string) {
    const score = Math.round(category.score * 100);
    let summary = '';
    const recommendations: string[] = [];

    // Generate summary based on score
    if (score >= 90) {
      summary = `Excellent! Your ${categoryName} is performing very well.`;
    } else if (score >= 70) {
      summary = `Good ${categoryName}, but there's room for improvement.`;
    } else if (score >= 50) {
      summary = `Your ${categoryName} needs attention and improvements.`;
    } else {
      summary = `Your ${categoryName} requires immediate attention and significant improvements.`;
    }

    // Generate specific recommendations based on category
    switch (categoryName) {
      case 'performance':
        if (score < 90) {
          recommendations.push('Optimize images and reduce their file sizes');
          recommendations.push('Minimize the use of large JavaScript files');
          recommendations.push('Enable text compression on your server');
          recommendations.push('Remove unused CSS and JavaScript code');
        }
        break;
      
      case 'accessibility':
        if (score < 90) {
          recommendations.push('Add alt text to all images');
          recommendations.push('Ensure proper heading structure (H1, H2, H3)');
          recommendations.push('Improve color contrast for better readability');
          recommendations.push('Add proper labels to form elements');
        }
        break;
      
      case 'best-practices':
        if (score < 90) {
          recommendations.push('Use HTTPS for all resources');
          recommendations.push('Avoid using deprecated APIs');
          recommendations.push('Ensure proper error handling');
          recommendations.push('Follow modern web development standards');
        }
        break;
      
      case 'seo':
        if (score < 90) {
          recommendations.push('Add meta descriptions to all pages');
          recommendations.push('Use descriptive page titles');
          recommendations.push('Implement proper heading structure');
          recommendations.push('Add structured data markup');
        }
        break;
    }

    return {
      score,
      summary,
      recommendations
    };
  }

  private static generateExecutiveSummary(categories: any, overallScore: number): string {
    const { performance, accessibility, bestPractices, seo } = categories;
    
    let summary = `Your website received an overall score of ${overallScore}/100. `;
    
    if (overallScore >= 90) {
      summary += "This is an excellent result! Your website is performing very well across all key areas.";
    } else if (overallScore >= 70) {
      summary += "Your website is performing well, but there are opportunities for improvement.";
    } else if (overallScore >= 50) {
      summary += "Your website needs attention in several areas to provide a better user experience.";
    } else {
      summary += "Your website requires significant improvements to meet modern web standards.";
    }

    // Add specific highlights
    const highlights = [];
    if (performance.score >= 90) highlights.push('fast loading times');
    if (accessibility.score >= 90) highlights.push('good accessibility');
    if (bestPractices.score >= 90) highlights.push('following best practices');
    if (seo.score >= 90) highlights.push('good search engine optimization');

    if (highlights.length > 0) {
      summary += ` Your website excels in: ${highlights.join(', ')}.`;
    }

    return summary;
  }

  private static generatePriorityActions(categories: any): string[] {
    const actions: string[] = [];
    const { performance, accessibility, bestPractices, seo } = categories;

    // Add actions based on lowest scores first
    const categoryScores = [
      { name: 'Performance', score: performance.score, actions: performance.recommendations },
      { name: 'Accessibility', score: accessibility.score, actions: accessibility.recommendations },
      { name: 'Best Practices', score: bestPractices.score, actions: bestPractices.recommendations },
      { name: 'SEO', score: seo.score, actions: seo.recommendations }
    ];

    // Sort by score (lowest first) and take top recommendations
    categoryScores
      .sort((a, b) => a.score - b.score)
      .slice(0, 2)
      .forEach(category => {
        if (category.score < 90) {
          actions.push(...category.actions.slice(0, 2));
        }
      });

    return actions.slice(0, 5); // Limit to top 5 actions
  }
}
