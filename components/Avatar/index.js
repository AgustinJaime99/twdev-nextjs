import { colors } from "../../styles/theme"

export default function Avatar({ alt, src, text, withText }) {
  return (
    <div>
      <img className="avatar" alt={alt} src={src} title={alt} />
      {withText && <h1>{text || alt}</h1>}
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        .avatar {
          width: 150px;
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
