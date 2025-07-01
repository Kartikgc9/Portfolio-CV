import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kartik Awadh Yadav | Portfolio",
  description: "Portfolio of Kartik Awadh Yadav - Projects, Skills, Resume and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        {children}
      </body>
    </html>
  );
}
