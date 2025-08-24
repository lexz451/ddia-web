'use client';

import React, { useState } from 'react';
import { TLighthouseReport } from '../utils/types';
import { LighthouseReport } from './LighthouseReport';

export const LighthouseForm: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<TLighthouseReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pages = [
    { value: 'home', label: 'Homepage', path: '/' },
    { value: 'about', label: 'About Us', path: '/about-us' },
    { value: 'our-work', label: 'Our Work', path: '/our-work' },
    { value: 'team', label: 'Team', path: '/team' },
    { value: 'careers', label: 'Careers', path: '/careers' },
    { value: 'get-involved', label: 'Get Involved', path: '/get-involved' },
    { value: 'faq', label: 'FAQ', path: '/faq' },
  ];

  const handleAnalyzePage = async () => {
    setIsLoading(true);
    setError(null);
    setReport(null);

    try {
      const selectedPageData = pages.find(p => p.value === selectedPage);
      const currentUrl = window.location.origin + selectedPageData?.path;
      
      const response = await fetch('/api/lighthouse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: currentUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to run audit');
      }

      setReport(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">

      {/* Page Selection and Analysis */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="page-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select a page to analyze:
            </label>
            <select
              id="page-select"
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              disabled={isLoading}
            >
              {pages.map((page) => (
                <option key={page.value} value={page.value}>
                  {page.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleAnalyzePage}
              disabled={isLoading}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Analyzing {pages.find(p => p.value === selectedPage)?.label}...
                </div>
              ) : (
                `Analyze ${pages.find(p => p.value === selectedPage)?.label}`
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Report */}
      {report && <LighthouseReport report={report} />}

      {/* Info Section */}
      {!report && !isLoading && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            What this analysis will tell you:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600 text-sm">
                How fast your website loads and how well it performs for users.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600 text-sm">
                How accessible your website is for users with disabilities.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Best Practices</h3>
              <p className="text-gray-600 text-sm">
                Whether your website follows modern web development standards.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">SEO</h3>
              <p className="text-gray-600 text-sm">
                How well your website is optimized for search engines.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
