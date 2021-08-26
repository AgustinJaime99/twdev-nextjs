import Link from "next/link"
import { useRouter } from "next/router"

import useTimeAgo from "../../hooks/useTimeAgo"
import Avatar from "../Avatar"


export default function Tw({ avatar, userName, content, id, createdAt, img }) {
    const timeago = useTimeAgo(createdAt)
    const router = useRouter()

    const handleClickArticle = (e) => {
        e.preventDefault()
        router.push(`/status/${id}`)

        // anterior mente el rotuer.push() se utilizaba como router.push("/status/[id]", `/status/${id}`),
        // donde el primer parametro era la ruta con el segmento dinamico, y el segundo parametro era con el id recuperado
    }



    return (
        <>
            <article key={id} >
                <div>
                    <Avatar alt={userName} src={avatar} />
                </div>
                <section onClick={handleClickArticle}>
                    <header>
                        <strong>{userName}</strong>
                        <span> · </span>
                        <Link href={`/status/${id}`} >
                            <a>
                                <time>{timeago}</time>
                            </a>
                        </Link>

                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>
            <style jsx>{`
            article {
                border-bottom: 2px solid #8c7def29;
                display: flex;
                padding: 10px 15px;
            }

            article:hover {
                background: #f5f8fa;
                cursor: pointer;
            }

            div {
                padding-right: 10px;
            }

            img {
                margin-top:10px;
                border-radius: 10px;
                height: auto;
                width: 100%;
            }

            p {
                margin: 0;
            } 

            time {
                color: #555e;
                font-size: 14px;
                cursor: pointer;
            }

            a{
                color:#555;
                font-size:14px;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }
            `}</style>
        </>
    )
}