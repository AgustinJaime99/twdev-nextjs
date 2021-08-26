import { colors } from "../../styles/theme"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Avatar({ alt, src, text, withText }) {
  const router = useRouter()

  const handleClickAvatar = e => {
    e.preventDefault()
    router.push(`/user/${alt}`)
  }

  return (
    <div onClick={handleClickAvatar}>
      <Link href={`/user/${alt}`}>
        <a>
          <img className="avatar" alt={alt} src={src} title={alt} />
          {withText && <h1>{text || alt}</h1>}
        </a>
      </Link>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 39px;
          border-radius: 900px;
        }
        .avatar + h1 {
          margin-left: 8px;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 100;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 24px;
          font-weight: 100;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
