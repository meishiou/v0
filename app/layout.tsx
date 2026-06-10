import type { Metadata, Viewport } from 'next'
import { Quicksand, Nunito } from 'next/font/google'
import '@fontsource/noto-sans-tc/400.css'
import '@fontsource/noto-sans-tc/500.css'
import '@fontsource/noto-sans-tc/700.css'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '米修 B&B | 宜蘭民宿 - 一本有陽光與風的旅行繪本',
  description:
    '米修 B&B 位於宜蘭，提供全棟包棟、微型包棟與單間慢活三種入住方式。在這裡，每一個角落都是一段故事，每一扇窗都有風景。',
  keywords: [
    '宜蘭民宿',
    '包棟民宿',
    '米修B&B',
    '宜蘭旅遊',
    '親子民宿',
    '宜蘭住宿',
  ],
  openGraph: {
    title: '米修 B&B | 宜蘭民宿',
    description: '一本有陽光與風的旅行繪本',
    type: 'website',
    locale: 'zh_TW',
  },
}

export const viewport: Viewport = {
  themeColor: '#8FC9C2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${quicksand.variable} ${nunito.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />

            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-05CGN9JM92"
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-05CGN9JM92');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}