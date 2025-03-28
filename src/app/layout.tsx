import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../styles/global.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Pacote de Posts para Advogados de Direito Previdenciário",
  description:
    "Pacote completo de conteúdo editável para advogados que desejam atrair mais clientes e se destacar nas redes sociais.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
