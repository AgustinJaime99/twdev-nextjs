import Link from "next/link"
import ArrowLeft from "../Icons/ArrowLeft"

export default function NavHead({ tittle, icon }) {

    return (
        <>
            <header>
                {/* <Avatar alt={user.userName} src={user.avatar}></Avatar> */}
                {icon ?
                    <Link href="/home">
                        <a>
                            <ArrowLeft width={24} height={24} stroke="#810084" />
                        </a>
                    </Link> : null}
                <h2>{tittle}</h2>
            </header>
            <style jsx>
                {`
                header {
                    border-bottom: 1px solid;
                    background: #fffffeee;
                    backdrop-filter: blur(2px);
                    height: 49px;
                    display: flex;
                    align-items: center;
                    position: sticky;
                    top: 0;
                    width: 100%;
                    }
                h2 {
                    padding-left:15px;
                    font-size: 20px;
                    font-weight: 700;
                    }
                a {
                    margin-left: 15px;
                    margin-right: 15px;
                }
                `}
            </style>
        </>
    )

}