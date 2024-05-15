import { Inter } from 'next/font/google';
// import { Inter } from '@expo-google-fonts/inter'
import './ui/globals.css'

export const inter_init = Inter({
  subsets: ['latin'],
  display:'swap',
  variable: '--font-inter',
  weight: '300'
});

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={`${inter_init.variable}`}>
        <main className='inter'>{children}</main>
      </body>
    </html>
  )
}
