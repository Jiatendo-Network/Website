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
import { Righteous } from "next/font/google"
import Footer from "@/components/common/Footer"

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
})

export const metadata: Metadata = {
  title: "Jiatendo",
  description: "Bringing back Nintendo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={righteous.variable}>
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
