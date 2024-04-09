import './style/list.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function List({ title, titleSpan, icon, props }) {
  return (
    <main className="list">
      <section className="list__header">
        <div className="list__header--span">
          <h3>{title}</h3>
          <h1>{titleSpan}</h1>
        </div>

        <div className="list__header--icon">{icon}</div>
      </section>

      <section className="list__container">
        {props.map((prop) => (
          <Link href={prop.file} key={prop.id}>
            <div className="list__post">
              <svg
                width="150"
                height="150"
                viewBox="0 0 66 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="13" width="66" height="78" rx="10" fill="#9F9F9F" />
                <rect width="43" height="13" fill="#D9D9D9" />
                <path d="M43 0L49 6.5L55 13H43V0Z" fill="#D9D9D9" />
                <rect x="54" y="13" width="4" height="34" fill="#5C5C5C" />
                <rect y="13" width="12" height="18" fill="#9F9F9F" />
                <rect x="58" y="13" width="8" height="18" fill="#9F9F9F" />
              </svg>

              <span>
                <h2>{prop.title}</h2>
                <p>{prop.description}</p>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width="20"
                  height="20"
                  className="list__arrow"
                />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
