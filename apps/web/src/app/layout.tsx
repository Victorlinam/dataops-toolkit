import type { ReactNode } from 'react';

export const metadata = {
  title: 'Data Reporting & Automation Toolkit',
  description: 'Enterprise data operations platform demo'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
