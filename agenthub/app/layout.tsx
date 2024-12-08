// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }


import { Metadata } from 'next'
import { Providers } from './providers'


import '@/styles/global-stylesheet.css'
import '@/styles/google-font-Source-Sans-Pro.css'
import '@/styles/google-font-IBM-Plex-Mono.css'
import "./globals.css";
import "./ts.css"
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'AIOS – The future of AI Agents',
  openGraph: {
    title: 'AIOS – The future of AI Agents',
    type: 'website',
    url: 'aiosfoundation',
    images: 'https://my.aios.foundation/Agent.png',
  },
  description:
    'We’re on a journey to advance and democratize artificial intelligence through open source and open science.',
  twitter: {
    card: 'summary_large_image',
    site: '@aiosfoundation',
  },
  appLinks: {},
  // fb: { app_id: '1321688464574422', },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Head>
        <meta charSet="utf-8" />
        <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" title="Hugging Face Blog" />
        <script defer data-domain="huggingface.co" src="/js/script.js"></script>
      </Head> */}
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <MantineProvider>
            <main
              className="HomePage flex min-h-screen flex-col text-black bg-white dark:bg-gray-950"
              style={{ fontSize: 16 }}
            >
              <div className="flex min-h-screen flex-col">
                {/* <NavHeader /> */}
                {/* <div className='w-full bg-inherit opacity-0 h-[24px]'></div> */}
                {children}
              </div>
            </main>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  )
}