import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
        <div className="flex flex-col justify-between min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
