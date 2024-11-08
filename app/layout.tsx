import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CADmir",
  description: "An AI powered miRNA database by Lambert iGEM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center flex-col">
          <div className="w-full h-4 bg-indigo-500"></div>
          <div className="w-full max-w-6xl mx-12">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
