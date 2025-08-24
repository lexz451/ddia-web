import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Performance Analyzer | DDIA',
  description: 'Get a comprehensive, easy-to-understand report about your website\'s performance, accessibility, SEO, and best practices.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function LighthouseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
