import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "A simple pomodoro timer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row items-center justify-center`}
      >
        <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-1  bg-[#111111]">
            <SidebarTrigger className="text-white hover:bg-zinc-800 hover:text-zinc-300 transition-all duration-300" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
