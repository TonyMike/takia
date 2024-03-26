// import { SessionProvider } from "next-auth/react"
import { Analytics } from "@vercel/analytics/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Provider from './Provider';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "Takia | Student Market",
  description: "Student Marketplace",
  icons: {
    icon: '/takiaIcon.svg',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden  select-none ">
        <Provider>
          <Analytics />
          <div className="flex flex-col  min-h-screen bg-cover " style={{ backgroundImage: 'url(/bg.png)' }} >
            <Header />
            <div className="px-6 sm:px-20  items-center grow md:px-12 relative lg:px-28 py-6 md:py-10 xl:px-44  "  >
              {children}
            </div>
            <Footer />
          </div>
        </Provider>

      </body>
    </html>

  );
}
