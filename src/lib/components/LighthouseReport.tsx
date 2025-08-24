'use client';

import React, { useState } from 'react';
import { TLighthouseReport } from '../utils/types';
import { ReportExporter } from '../utils/reportExport';

interface LighthouseReportProps {
  report: TLighthouseReport;
}

const ScoreBadge: React.FC<{ score: number; label: string }> = ({ score, label }) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (score >= 50) return 'bg-orange-100 text-orange-800 border-orange-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getScoreColor(score)}`}>
      <span className="font-bold mr-2">{score}</span>
      <span>{label}</span>
    </div>
  );
};

const CategoryCard: React.FC<{
  title: string;
  score: number;
  summary: string;
  recommendations: string[];
}> = ({ title, score, summary, recommendations }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <ScoreBadge score={score} label={`${score}/100`} />
      </div>
      
      <p className="text-gray-700 mb-4">{summary}</p>
      
      {recommendations.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Recommendations:</h4>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export const LighthouseReport: React.FC<LighthouseReportProps> = ({ report }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Website Performance Report
        </h1>
        <p className="text-gray-600 mb-4">
          Generated on {new Date(report.timestamp).toLocaleDateString()} for {report.url}
        </p>
        
        {/* Overall Score */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-4">
            <ScoreBadge score={report.overallScore} label="Overall Score" />
          </div>
        </div>

        {/* Export Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => ReportExporter.exportAsJSON(report)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Export as JSON
          </button>
          <button
            onClick={() => ReportExporter.exportAsText(report)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Export as Text
          </button>
          <button
            onClick={() => ReportExporter.shareReport(report)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Share Report
          </button>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Executive Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {report.executiveSummary}
        </p>
      </div>

      {/* Priority Actions */}
      {report.priorityActions.length > 0 && (
        <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Priority Actions
          </h2>
          <ul className="space-y-2">
            {report.priorityActions.map((action, index) => (
              <li key={index} className="flex items-start">
                <span className="text-amber-600 mr-2 font-bold">{index + 1}.</span>
                <span className="text-gray-700">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Category Scores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryCard
          title="Performance"
          score={report.categories.performance.score}
          summary={report.categories.performance.summary}
          recommendations={report.categories.performance.recommendations}
        />
        
        <CategoryCard
          title="Accessibility"
          score={report.categories.accessibility.score}
          summary={report.categories.accessibility.summary}
          recommendations={report.categories.accessibility.recommendations}
        />
        
        <CategoryCard
          title="Best Practices"
          score={report.categories.bestPractices.score}
          summary={report.categories.bestPractices.summary}
          recommendations={report.categories.bestPractices.recommendations}
        />
        
        <CategoryCard
          title="SEO"
          score={report.categories.seo.score}
          summary={report.categories.seo.summary}
          recommendations={report.categories.seo.recommendations}
        />
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
        <p>
          This report was generated using Google Lighthouse, a tool that provides insights into website performance, accessibility, and best practices.
        </p>
      </div>
    </div>
  );
};
