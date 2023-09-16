'use client'

import './style/accessibility.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Accessibility() {
  const [isOn, setIsOn] = useState(false)

  return (
    <section
      className={`accessibility ${isOn ? 'accessibility--on' : 'accessibility--off'}`}
    >
      <Image
        src="/accessibility.svg"
        alt="dostępność"
        width="50"
        height="50"
        onClick={() => setIsOn(!isOn)}
        className={`accessibility__image ${isOn ? 'accessibility__image--max' : ''}`}
        title="Dostępność cyfrowa"
      />

      <ul className="accessibility__menu">
        <li onClick={() => document.body.classList.toggle('large-font')}>
          Powieksz tekstu
        </li>
        <li onClick={() => document.body.classList.toggle('hight-contrast')}>
          Wysoki kontrast
        </li>
        <li onClick={() => document.body.classList.toggle('link-on')}>
          Pokazanie linków
        </li>
        <li
          onClick={() =>
            document.body.classList.remove('large-font', 'hight-contrast', 'link-on')
          }
        >
          Reset
        </li>
      </ul>
    </section>
  )
}
