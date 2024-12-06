import type { Metadata } from "next"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import { Nunito } from "next/font/google"
import "./globals.css"
import theme from "@/utils/muiTheme"

export const metadata: Metadata = {
  title: "Hackaton 2024",
}

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
})

interface RootLayoutPageProps {
  children: React.ReactNode
}

// https://mui.com/material-ui/integrations/nextjs/

export default function RootLayout({
  children,
}: Readonly<RootLayoutPageProps>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
