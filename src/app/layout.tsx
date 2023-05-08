"use client";

import "./globals.css";
import { Abel } from "next/font/google";
import { QueryClientProvider, QueryClient } from "react-query";

const inter = Abel({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
