
import { Toaster } from "react-hot-toast";
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
        <head>
          <link rel="icon" href="/logo-icon.png" type="image/png" />
          <title>FileCloud</title>
        </head>
        <body className={``}>
          {children}
        <Toaster position="top-right" reverseOrder={false}/>
        </body>
      </html>
    </ClerkProvider>
  );
}
