import Link from "next/link"

import Create from "../Icons/Create"
import HomeIcon from "../Icons/HomeIcon"
import Search from "../Icons/Search"
import Exit from "../Icons/Exit"

import { logOut } from "../../firebase/client"

import { colors } from "../../styles/theme"

export default function Nav() {

    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
    }

    return (
        <>
            <nav>
                <Link href="/home">
                    <a>
                        <HomeIcon width={24} height={24} stroke="#810084" />
                    </a>
                </Link>
                <Link href="/compose/twitt">
                    <a>
                        <Create width={24} height={24} stroke="#810084" />
                    </a>
                </Link>
                <Link href="/home">
                    <a>
                        <Search width={24} height={24} stroke="#810084" />
                    </a>
                </Link>
                <Link href="/">
                    <a onClick={handleLogOut}>
                        <Exit width={24} height={25} stroke="#810084" />
                    </a>
                </Link>
            </nav>
            <style jsx>
                {`
                nav {
            background: #fff;
            bottom: 0;
            border-top: 1px solid #eee;
            height: 49px;
            width: 100%;
            position: sticky;
            width:100%;
            display: flex;
          }

          nav a {
            padding: 5px;
            align-items: center;
            display: flex;
            flex: 1 1 auto;
            justify-content: center;
            height: 100%;
          }

          nav a:hover {
            background: radial-gradient(#b15dff33 15%, transparent 17%);
            background-size: 180px 180px;
            background-position: center;
          }
          nav a:hover > :global(svg) {
            stroke: ${colors.primary}
          }
                `}
            </style>
        </>
    )
}