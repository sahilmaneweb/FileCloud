
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "FileCloud",
  description: "Upload, Share and Download File on Cloud",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body
          className={``}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
