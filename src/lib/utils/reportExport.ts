import { TLighthouseReport } from './types';

export class ReportExporter {
  static exportAsJSON(report: TLighthouseReport): void {
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lighthouse-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  static exportAsText(report: TLighthouseReport): void {
    const textContent = this.generateTextReport(report);
    const dataBlob = new Blob([textContent], { type: 'text/plain' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lighthouse-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  private static generateTextReport(report: TLighthouseReport): string {
    const lines: string[] = [];
    
    lines.push('WEBSITE PERFORMANCE REPORT');
    lines.push('='.repeat(50));
    lines.push(`URL: ${report.url}`);
    lines.push(`Generated: ${new Date(report.timestamp).toLocaleString()}`);
    lines.push(`Overall Score: ${report.overallScore}/100`);
    lines.push('');
    
    lines.push('EXECUTIVE SUMMARY');
    lines.push('-'.repeat(20));
    lines.push(report.executiveSummary);
    lines.push('');
    
    if (report.priorityActions.length > 0) {
      lines.push('PRIORITY ACTIONS');
      lines.push('-'.repeat(20));
      report.priorityActions.forEach((action, index) => {
        lines.push(`${index + 1}. ${action}`);
      });
      lines.push('');
    }
    
    lines.push('CATEGORY BREAKDOWN');
    lines.push('-'.repeat(20));
    
    const categories = [
      { name: 'Performance', data: report.categories.performance },
      { name: 'Accessibility', data: report.categories.accessibility },
      { name: 'Best Practices', data: report.categories.bestPractices },
      { name: 'SEO', data: report.categories.seo }
    ];
    
    categories.forEach(category => {
      lines.push(`${category.name}: ${category.data.score}/100`);
      lines.push(`  Summary: ${category.data.summary}`);
      if (category.data.recommendations.length > 0) {
        lines.push('  Recommendations:');
        category.data.recommendations.forEach(rec => {
          lines.push(`    • ${rec}`);
        });
      }
      lines.push('');
    });
    
    return lines.join('\n');
  }

  static shareReport(report: TLighthouseReport): void {
    const textContent = this.generateTextReport(report);
    
    if (navigator.share) {
      navigator.share({
        title: 'Website Performance Report',
        text: textContent,
        url: report.url
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(textContent).then(() => {
        alert('Report copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy report to clipboard');
      });
    }
  }
}
