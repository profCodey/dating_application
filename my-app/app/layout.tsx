
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootStyleRegistry from "./emotion";
import Providers from "./providers";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflirt Dating Application",
  description: "Your next date is just a click away.",
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <RootStyleRegistry>
              {children}
          </RootStyleRegistry>
        </Providers>
      </body>
    </html>
  );
}
