"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReduxProvider } from "./ReduxProvider";
import { Toaster } from "sonner";
import ToastContainer from "./ToastContainer";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Agent | IBADAN AGENT",
  description: "Agent dashboard for Ibadan Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
          <Toaster position="top-right" expand={false} />
          <ToastContainer/>
        </html>
      </ReactQueryProvider>
    </ReduxProvider>
  );
}
