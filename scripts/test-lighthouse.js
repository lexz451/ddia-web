const { LighthouseService } = require('../src/lib/utils/lighthouse');

async function testLighthouse() {
  try {
    console.log('Testing Lighthouse integration...');
    console.log('Running audit for https://example.com...');
    
    const result = await LighthouseService.runAudit('https://example.com');
    console.log('Raw Lighthouse result received');
    
    const report = LighthouseService.generatePlainLanguageReport(result);
    console.log('Plain language report generated successfully');
    
    console.log('\n=== REPORT SUMMARY ===');
    console.log(`URL: ${report.url}`);
    console.log(`Overall Score: ${report.overallScore}/100`);
    console.log(`Executive Summary: ${report.executiveSummary}`);
    
    console.log('\n=== CATEGORY SCORES ===');
    console.log(`Performance: ${report.categories.performance.score}/100`);
    console.log(`Accessibility: ${report.categories.accessibility.score}/100`);
    console.log(`Best Practices: ${report.categories.bestPractices.score}/100`);
    console.log(`SEO: ${report.categories.seo.score}/100`);
    
    console.log('\n=== PRIORITY ACTIONS ===');
    report.priorityActions.forEach((action, index) => {
      console.log(`${index + 1}. ${action}`);
    });
    
    console.log('\n✅ Lighthouse integration test completed successfully!');
    
  } catch (error) {
    console.error('❌ Lighthouse integration test failed:', error.message);
    process.exit(1);
  }
}

testLighthouse();
