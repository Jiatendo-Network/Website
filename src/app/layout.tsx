import type { Metadata } from "next"
import "@/styles/globals.css"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <Header>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Header>
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
}
