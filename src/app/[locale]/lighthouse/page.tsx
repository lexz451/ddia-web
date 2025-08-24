'use client';

import { useState } from 'react';
import { LighthouseForm } from '@/lib/components/LighthouseForm';
import { SiteWideAnalysis } from '@/lib/components/SiteWideAnalysis';

export default function LighthousePage() {
  const [activeTab, setActiveTab] = useState<'single' | 'sitewide'>('single');

  return (
    <div className="min-h-screen bg-gray-50 pb-footer mt-[150px]">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Performance Analysis
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get comprehensive insights into your website's performance, accessibility, SEO, and best practices. 
            Choose between analyzing individual pages or running a complete site-wide analysis.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('single')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'single'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Single Page Analysis
            </button>
            <button
              onClick={() => setActiveTab('sitewide')}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'sitewide'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Site-Wide Analysis
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          {activeTab === 'single' ? (
            <LighthouseForm />
          ) : (
            <SiteWideAnalysis />
          )}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            About This Analysis Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Single Page Analysis</h3>
              <p className="text-gray-600 text-sm">
                Analyze individual pages to get detailed insights and specific recommendations for improvement.
                Perfect for focusing on high-priority pages or troubleshooting specific issues.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Site-Wide Analysis</h3>
              <p className="text-gray-600 text-sm">
                Get a comprehensive overview of your entire website's performance. This analyzes all major pages
                and provides an overall site score to help identify patterns and prioritize improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
