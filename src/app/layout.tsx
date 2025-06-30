import type { Metadata } from "next"
import "@/styles/globals.css"
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Jiatendo",
  description: "Bringing back Nintendo",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <Toaster richColors position="top-right" closeButton />
      <html lang="en">
        <body>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </AuthProvider>
  )
}
