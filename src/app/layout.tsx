import type { Metadata } from "next";

import 'style/css/main.css'
import 'style/css/App.css'

import AppHeader from 'components/shared/AppHeader'

export const metadata: Metadata = {
  title: "jGabriel",
  description: "My Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
