# Lighthouse Integration

This project includes a comprehensive Lighthouse integration that generates user-friendly reports about your own website's performance, accessibility, SEO, and best practices.

## Features

- **Easy-to-understand reports**: Technical Lighthouse results are translated into plain language
- **Comprehensive analysis**: Covers Performance, Accessibility, Best Practices, and SEO
- **Export functionality**: Download reports as JSON or text files
- **Share capability**: Share reports via native sharing or clipboard
- **Error handling**: User-friendly error messages for common issues
- **Responsive UI**: Modern, accessible interface

## Components

### 1. LighthouseService (`src/lib/utils/lighthouse.ts`)
Core service that runs Lighthouse audits and generates plain language reports.

**Key methods:**
- `runAudit(url: string)`: Runs a Lighthouse audit on the specified URL
- `generatePlainLanguageReport(result)`: Converts technical results to user-friendly format

### 2. API Endpoint (`src/app/api/lighthouse/route.ts`)
REST API endpoint for running Lighthouse audits.

**Usage:**
```bash
POST /api/lighthouse
Content-Type: application/json

{
  "url": "https://example.com"
}
```

### 3. React Components
- `LighthouseForm`: Form component for URL input and audit triggering
- `LighthouseReport`: Component for displaying audit results
- `ReportExporter`: Utility for exporting reports in different formats

### 4. Page (`src/app/[locale]/lighthouse/page.tsx`)
Main page showcasing the Lighthouse integration.

## Usage

### Via Web Interface
1. Navigate to `/lighthouse` in your application
2. Choose between "Single Page Analysis" or "Site-Wide Analysis"
3. For single page: Select a specific page to analyze
4. For site-wide: Click "Run Site-Wide Analysis" to analyze all pages
5. View the generated report(s)
6. Export or share the report as needed

### Via API
```javascript
const response = await fetch('/api/lighthouse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ url: 'http://localhost:3000' }), // Your website URL
});

const data = await response.json();
console.log(data.data); // Plain language report
```

## Report Structure

The generated report includes:

### Executive Summary
- Overall score (0-100)
- High-level assessment
- Key highlights

### Category Breakdown
- **Performance**: Loading speed, optimization metrics
- **Accessibility**: User accessibility and assistive technology support
- **Best Practices**: Modern web standards and security
- **SEO**: Search engine optimization factors

### Priority Actions
- Top 5 actionable recommendations
- Prioritized by impact and ease of implementation

## Error Handling

The integration handles common errors with user-friendly messages:

- **Timeout errors**: Website takes too long to load
- **DNS errors**: URL not found
- **Connection errors**: Website not accessible
- **Invalid URLs**: Malformed URL format

## Dependencies

- `lighthouse`: Core Lighthouse library
- `chrome-launcher`: Chrome browser automation
- `next`: Next.js framework
- `react`: React library

## Installation

The required dependencies are already included in `package.json`:

```bash
npm install lighthouse chrome-launcher
```

## Testing

Run the test script to verify the integration:

```bash
node scripts/test-lighthouse.js
```

## Customization

### Adding New Categories
To add new Lighthouse categories, modify the `runAudit` method in `LighthouseService`:

```typescript
const options = {
  // ... existing options
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
};
```

### Customizing Report Language
Modify the `generatePlainLanguageReport` method to customize the language and tone of the reports.

### Adding Export Formats
Extend the `ReportExporter` class to add new export formats (PDF, CSV, etc.).

## Security Considerations

- The integration runs Lighthouse in a headless Chrome environment
- Timeouts are set to prevent long-running processes
- Input validation ensures only valid URLs are processed
- Error messages don't expose sensitive system information

## Performance Considerations

- Lighthouse audits can take 30-60 seconds depending on website complexity
- Chrome instances are properly cleaned up after each audit
- Timeouts prevent hanging processes
- Consider implementing caching for repeated audits of the same URL

## Browser Compatibility

The integration requires:
- Node.js 16+ (for Lighthouse compatibility)
- Chrome/Chromium browser (automatically managed by chrome-launcher)
- Modern browser support for the web interface

## Troubleshooting

### Common Issues

1. **Chrome not found**: Ensure Chrome is installed on the system
2. **Permission errors**: Run with appropriate permissions for Chrome launch
3. **Memory issues**: Large websites may require more memory allocation
4. **Network timeouts**: Adjust timeout settings for slower websites

### Debug Mode

Enable debug logging by modifying the Lighthouse options:

```typescript
const options = {
  logLevel: 'debug', // Change from 'info' to 'debug'
  // ... other options
};
```
