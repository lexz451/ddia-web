import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { TLighthouseResult } from './types';

export async function runLighthouseAudit(url: string) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  });
  
  try {
    const options = {
      logLevel: 'info' as const,
      output: 'json' as const,
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
      timeout: 60000,
      maxWaitForLoad: 30000,
    };

    const runnerResult = await lighthouse(url, options);
    const report = runnerResult?.lhr;

    if (!report) {
      throw new Error('Failed to generate Lighthouse report');
    }

    return report as unknown as TLighthouseResult;
  } finally {
    await chrome.kill();
  }
}
