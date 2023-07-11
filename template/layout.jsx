import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Accessibility from '../components/accessibility'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children, title, styleName }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Specjalistyczny Ośrodek Szkolno-Wychowawczy w Lubaczowie`}</title>
        <meta name="description" content="opis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${inter.className} backgraund`}>
        <Header />
        <Accessibility />
        <main className={`main-${styleName}`}>{children}</main>
        <Footer />
      </div>
    </>
  )
}
