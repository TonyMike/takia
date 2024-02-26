
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Takia | Student Market",
  description: "Student Marketplace",
  icons: {
    icon: '/takiaIcon.svg',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <div className="flex flex-col justify-between min-h-screen bg-cover " style={{ backgroundImage: 'url(/bg.png)' }} >
          <Header />
          <div className="px-6 md:px-16 relative lg:px-28 py-6 md:py-10  "  >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
