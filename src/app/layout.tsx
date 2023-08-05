import type { Metadata } from "next";

import 'style/css/bootstrap.min.css'
import 'style/css/mklb.css'
import 'style/css/materialdesignicons.min.css'
import 'style/css/tiny-slider.css'
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
        {/* Javascript */}
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/gumshoe.js"></script>

        {/* Slider */}
        <script src="js/tiny-slider.js "></script>
        <script src="js/tiny-slider-init.js "></script>

        {/* MK Lightbox */}
        <script src="js/mklb.js"></script>

        {/* Contact */}
        <script src="js/contact.js"></script>

        {/* Counter init */}
        <script src="js/counter.init.js"></script>

        {/* Feather icon */}
        <script src="js/feather.min.js"></script>

        {/* Ripples */}
        <script src="js/jquery.ripples-min.js"></script>
        <script src="js/ripple.init.js"></script>

        {/* Typed */}
        <script src="js/typed.js"></script>
        <script src="js/typed.init.js"></script>
        
        {/* Switcher */}
        <script src="js/switcher.js"></script>

        {/* Main Js */}
        <script src="js/app.js"></script>

        <script src="js/querySelector.js"></script>
      </body>
    </html>
  );
}