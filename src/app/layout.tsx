import type { Metadata } from "next";

import 'style/css/bootstrap.min.css'
import 'style/css/mklb.css'
import 'style/css/materialdesignicons.min.css'
import 'style/css/tiny-slider.css'
//import 'style/css/style.css' //id="theme-opt"
//import 'style/css/colors/default.css' //id="color-opt
import 'style/scss/style.scss'

export const metadata: Metadata = {
  title: "jGabriel",
  description: "My Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}