import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import ReduxProvider from "@/components/ReduxProvider";
import { Providers } from "@/components/ThProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopSmart",
  description: "Generated by aymen bachiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            <Providers>
              <Navbar />
              <main className="pb-20 pt-[95px] p-8">{children}</main>
              <Footer />
            </Providers>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
