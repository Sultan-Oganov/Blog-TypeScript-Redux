import React from 'react'
import Header from './Header/Header'
import Head from 'next/head'

const MainLayout = ({ children }) => {
    return (
        <>
            <div>
                <Head>
                    <title>Blog</title>
                    <meta name="keywords" content="blog, social-network, instagram, facebook" />
                    <meta name="description" content="Create your first blog" />
                    <meta charSet="utf-8" />
                </Head>

                <Header />

                <main>
                    {children}
                </main>
            </div>
            <style jsx>{`
                main {
                    margin: 100px 0 0;
                }
            `}
            </style>
        </>
    )
}

export default MainLayout