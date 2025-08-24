'use client';

import React, { useState } from 'react';
import { TLighthouseReport } from '../utils/types';

interface PageAnalysis {
  page: string;
  url: string;
  status: 'pending' | 'loading' | 'completed' | 'error';
  report?: TLighthouseReport;
  error?: string;
}

export const SiteWideAnalysis: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [pageAnalyses, setPageAnalyses] = useState<PageAnalysis[]>([]);
  const [overallScore, setOverallScore] = useState<number | null>(null);

  const pages = [
    { value: 'home', label: 'Homepage', path: '/' },
    { value: 'about', label: 'About Us', path: '/about-us' },
    { value: 'our-work', label: 'Our Work', path: '/our-work' },
    { value: 'team', label: 'Team', path: '/team' },
    { value: 'careers', label: 'Careers', path: '/careers' },
    { value: 'get-involved', label: 'Get Involved', path: '/get-involved' },
    { value: 'faq', label: 'FAQ', path: '/faq' },
  ];

  const analyzePage = async (page: typeof pages[0]): Promise<PageAnalysis> => {
    const url = window.location.origin + page.path;
    
    try {
      const response = await fetch('/api/lighthouse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to run audit');
      }

      return {
        page: page.label,
        url,
        status: 'completed',
        report: data.data,
      };
    } catch (error) {
      return {
        page: page.label,
        url,
        status: 'error',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  };

  const runSiteWideAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Initialize all pages as pending
    const initialAnalyses: PageAnalysis[] = pages.map(page => ({
      page: page.label,
      url: window.location.origin + page.path,
      status: 'pending',
    }));
    
    setPageAnalyses(initialAnalyses);

    const results: PageAnalysis[] = [];

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      
      // Update status to loading
      setPageAnalyses(prev => 
        prev.map((analysis, index) => 
          index === i ? { ...analysis, status: 'loading' } : analysis
        )
      );

      // Analyze the page
      const result = await analyzePage(page);
      results.push(result);

      // Update with result
      setPageAnalyses(prev => 
        prev.map((analysis, index) => 
          index === i ? result : analysis
        )
      );

      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Calculate overall score
    const completedReports = results.filter(r => r.status === 'completed' && r.report);
    if (completedReports.length > 0) {
      const totalScore = completedReports.reduce((sum, r) => sum + (r.report?.overallScore || 0), 0);
      const averageScore = Math.round(totalScore / completedReports.length);
      setOverallScore(averageScore);
    }

    setIsAnalyzing(false);
  };

  const getStatusColor = (status: PageAnalysis['status']) => {
    switch (status) {
      case 'pending': return 'text-gray-500';
      case 'loading': return 'text-blue-600';
      case 'completed': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: PageAnalysis['status']) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'loading': return '🔄';
      case 'completed': return '✅';
      case 'error': return '❌';
      default: return '⏳';
    }
  };

  return (
    <div className="p-6">

      {/* Analysis Button */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
        <div className="text-center">
          <button
            onClick={runSiteWideAnalysis}
            disabled={isAnalyzing}
            className="bg-green-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isAnalyzing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Running site-wide analysis...
              </div>
            ) : (
              'Run Site-Wide Analysis'
            )}
          </button>
        </div>
      </div>

      {/* Overall Score */}
      {overallScore !== null && (
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Site Score</h3>
          <div className="text-3xl font-bold text-blue-600">{overallScore}/100</div>
          <p className="text-gray-600 mt-2">
            Average performance score across all analyzed pages
          </p>
        </div>
      )}

      {/* Page Analysis Results */}
      {pageAnalyses.length > 0 && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Page Analysis Results</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {pageAnalyses.map((analysis, index) => (
              <div key={index} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getStatusIcon(analysis.status)}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{analysis.page}</h4>
                      <p className="text-sm text-gray-500">{analysis.url}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm font-medium ${getStatusColor(analysis.status)}`}>
                      {analysis.status === 'loading' && 'Analyzing...'}
                      {analysis.status === 'completed' && `${analysis.report?.overallScore}/100`}
                      {analysis.status === 'error' && 'Failed'}
                      {analysis.status === 'pending' && 'Pending'}
                    </span>
                    {analysis.report && (
                      <div className="flex space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          analysis.report.categories.performance.score >= 90 ? 'bg-green-100 text-green-800' :
                          analysis.report.categories.performance.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          P: {analysis.report.categories.performance.score}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          analysis.report.categories.accessibility.score >= 90 ? 'bg-green-100 text-green-800' :
                          analysis.report.categories.accessibility.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          A: {analysis.report.categories.accessibility.score}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          analysis.report.categories.bestPractices.score >= 90 ? 'bg-green-100 text-green-800' :
                          analysis.report.categories.bestPractices.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          BP: {analysis.report.categories.bestPractices.score}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          analysis.report.categories.seo.score >= 90 ? 'bg-green-100 text-green-800' :
                          analysis.report.categories.seo.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          SEO: {analysis.report.categories.seo.score}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {analysis.error && (
                  <p className="text-red-600 text-sm mt-2">{analysis.error}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
