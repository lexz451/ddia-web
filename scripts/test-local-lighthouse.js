const { LighthouseService } = require('../src/lib/utils/lighthouse');

async function testLocalLighthouse() {
  try {
    console.log('Testing Lighthouse integration with local development server...');
    console.log('Running audit for http://localhost:3000...');
    
    const result = await LighthouseService.runAudit('http://localhost:3000');
    console.log('Raw Lighthouse result received');
    
    const report = LighthouseService.generatePlainLanguageReport(result);
    console.log('Plain language report generated successfully');
    
    console.log('\n=== LOCAL WEBSITE REPORT ===');
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
    
    console.log('\n✅ Local Lighthouse integration test completed successfully!');
    console.log('\n💡 To view the web interface, start your development server with:');
    console.log('   npm run dev');
    console.log('   Then visit: http://localhost:3000/lighthouse');
    
  } catch (error) {
    console.error('❌ Local Lighthouse integration test failed:', error.message);
    console.log('\n💡 Make sure your development server is running:');
    console.log('   npm run dev');
    process.exit(1);
  }
}

testLocalLighthouse();
