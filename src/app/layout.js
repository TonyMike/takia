
import Header from "../components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Takia | Student Market",
  description: "Student Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen '>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <div className="px-10 md:px-16 lg:px-28 py-10">
            {children}
          </div>
          <h2 className="h-10 bg-black text-white">Footer</h2>
        </div>
      </body>
    </html>
  );
}
