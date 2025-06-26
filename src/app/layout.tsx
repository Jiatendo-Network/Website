import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

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
  )
}
