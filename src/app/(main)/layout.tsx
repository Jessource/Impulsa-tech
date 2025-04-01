"use client"
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-grow min-h-screen">
            <Navbar />
            <main className="flex-grow p-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
