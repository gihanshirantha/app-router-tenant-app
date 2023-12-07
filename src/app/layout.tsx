import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui-core";
import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactQueryProvider } from "./queryProvider";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern-walk",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ClerkProvider publishableKey={clerkPubKey}>
            <CartProvider>
              <Header />
              {children}
            </CartProvider>
          </ClerkProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
