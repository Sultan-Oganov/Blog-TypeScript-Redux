import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>
                        <img
                            src="/logo.jpg"
                            alt="Logo"
                        />
                    </a>
                </Link>
                <Link href='/'><a>Home Page</a></Link>
                <Link href='/'><a>Posts</a></Link>
                <Link href='/posts/new'><a>Create Post</a></Link>
            </nav>
            <style jsx>{`
        nav{
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            display:flex;
            align-items: center;
            padding: 10px 0px 10px 50px;
            background: #fff;
        }
        a{
            display: block;
            margin: 0 50px 0 0;
            font-size: 18px;
            color: #6a6a6a;
            transition: 0.5s ease 0s;
        }
        a:hover {
            color: #000;
        }
        img{
            width: 50px;
        }
            `}
            </style>
        </>
    )
}

export default Header