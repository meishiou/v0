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
  metadataBase: new URL('https://meishiou.com.tw'),
  title: '米修 B&B | 宜蘭民宿 - 一本有陽光與風的旅行繪本',
  description:
    '米修 B&B 位於宜蘭冬山鄉，鄰近安農溪與羅東，提供全棟包棟、微型包棟與單間慢活三種入住方式。在這裡，每一個角落都是一段故事，每一扇窗都有風景。',
  keywords: [
    '宜蘭民宿',
    '宜蘭包棟民宿',
    '冬山民宿',
    '羅東民宿',
    '安農溪民宿',
    '親子民宿',
    '米修B&B',
    '宜蘭住宿',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '米修 B&B | 宜蘭民宿',
    description: '一本有陽光與風的旅行繪本',
    url: 'https://meishiou.com.tw',
    siteName: '米修 B&B',
    type: 'website',
    locale: 'zh_TW',
    images: [
      {
        url: '/images/hero-1.webp',
        width: 1200,
        height: 630,
        alt: '米修 B&B 宜蘭民宿外觀與庭院',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#8FC9C2',
  width: 'device-width',
  initialScale: 1,
}

const lodgingBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': 'https://meishiou.com.tw/#lodgingbusiness',
  name: '米修 B&B',
  alternateName: 'Meishiou B&B',
  url: 'https://meishiou.com.tw',
  image: 'https://meishiou.com.tw/images/hero-1.webp',
  logo: 'https://meishiou.com.tw/images/LOGO.jpg',
  description:
    '米修 B&B 位於宜蘭冬山鄉，鄰近安農溪與羅東，提供全棟包棟、微型包棟與單間慢活住宿，是一間帶有手作木作、生活感與自然光氛圍的宜蘭民宿。',
  telephone: '+886-939-741-583',
  email: 'meishioubnb@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '柯林村光華一路415號',
    addressLocality: '冬山鄉',
    addressRegion: '宜蘭縣',
    postalCode: '',
    addressCountry: 'TW',
  },
  areaServed: {
    '@type': 'Place',
    name: '宜蘭縣冬山鄉、羅東、安農溪',
  },
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/meishioubnb/',
    'https://www.instagram.com/meishioubnb/',
  ],
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: '包棟住宿',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: '微型包棟',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: '單間住宿',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: '停車空間',
      value: true,
    },
  ],
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

        <Script
          id="lodging-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(lodgingBusinessSchema),
          }}
        />

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