import { colors } from "../../styles/theme"

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>{children}</button>
      <style jsx>
        {`
          button {
            cursor: pointer;
            align-items: center;
            display: flex;
            background: ${colors.primary};
            border: 0;
            color: #fff;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 150;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
            box-shadow: 0 8px 6px -6px black;
            user-select: none;
          }

          button[disabled] {
            pointer-events: none;
            opacity: 0.2;
          }

          button > :global(svg) {
            margin-right: 10px;
          }
          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  )
}

export default Button
