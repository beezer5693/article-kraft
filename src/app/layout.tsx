import { ThemeProvider } from "@/context/ThemeProvider";
import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Article Kraft",
  description:
    "An AI powered article writer that specializes in helping you write more SEO performant articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          ubuntu.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={Theme.SYSTEM}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
