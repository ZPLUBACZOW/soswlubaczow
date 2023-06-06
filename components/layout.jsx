import Head from 'next/head'
import Header from './header'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children, title, styleName }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Młodzieżowy Ośrodek Wychowawczy w Lubaczowie`}</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={inter.className}>
        <Header />
        <main className={`main-${styleName}`}>{children}</main>
      </div>
    </>
  )
}
