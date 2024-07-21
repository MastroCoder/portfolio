import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import ParticlesComponent from "@/components/ParticlesComponent";

export const metadata: Metadata = {
  title: "Felipe's Portfolio",
  description: "Take a look and consider hiring me!",
};

const ibm_plex_mono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <ParticlesComponent />  
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
