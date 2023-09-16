import './globals.scss'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Accessibility from '@/components/accessibility'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Specjalistyczny Ośrodek Szkolno-Wychowawczy w Lubaczowie',
    default: 'Specjalistyczny Ośrodek Szkolno-Wychowawczy w Lubaczowie',
  },
  description: 'Specjalistyczny Ośrodek Szkolno-Wychowawczy w Lubaczowie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="backgraund">
          <Header />
          <Accessibility />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
