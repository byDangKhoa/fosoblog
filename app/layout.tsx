import '@/app/globals.css'
import { SiteHeader } from '@/components/header'
import { Raleway } from 'next/font/google'
import type { ReactNode } from 'react'

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog FOSO',
  description:
    'Cùng FOSO tham gia kiến thức, xu hướng công nghệ và sản xuất ngay!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='vi'>
      <body className={raleway.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

import './globals.css'
