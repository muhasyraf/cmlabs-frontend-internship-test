import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import MobileNavbar from "@/components/layout/MobileNavbar";
import NextTopLoader from "nextjs-toploader";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal App",
  description: "The best meal app in the world",
  authors: [{ name: "Asyraf" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} m-auto flex flex-col items-center justify-start overflow-auto md:overflow-visible`}
      >
        <NextTopLoader color="#ff4747" height={2} />
        <div className="hidden sm:block z-50 sticky top-0 left-0 right-0 w-full">
          <Navbar />
        </div>
        <div className="sm:hidden block z-50 top-0 left-0 right-0 w-full">
          <MobileNavbar />
        </div>
        <main className="w-full flex-1 text-center">
          <div className="max-sm:pt-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
