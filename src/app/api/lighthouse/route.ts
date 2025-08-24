import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Dynamically import Lighthouse to avoid bundling issues
    const { LighthouseService } = await import('@/lib/utils/lighthouse');
    
    // Run Lighthouse audit
    const result = await LighthouseService.runAudit(url);
    
    // Generate plain language report
    const report = LighthouseService.generatePlainLanguageReport(result);

    return NextResponse.json({
      success: true,
      data: report,
      rawResult: result
    });

  } catch (error) {
    console.error('Lighthouse audit error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to run Lighthouse audit',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Lighthouse API endpoint',
    usage: 'POST /api/lighthouse with { "url": "https://example.com" }'
  });
}
