import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link href="/" onClick={reset}>
            <Image
              src="Logo.svg"
              alt="logo"
              width="220"
              height="147"
              className="logo"
              priority={true}
            />
          </Link>
        </div>
      </header>
    </>
  )
}
