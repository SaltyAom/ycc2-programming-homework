import { Fragment } from "react"

import Head from "next/head"

import Link from "next/link"

import "styles/purchased.styl"

const Purchased = () => (
    <Fragment>
        <Head>
            <title>Thanks for your order.</title>
        </Head>
        <main id="purchased">
            <h1 className="title">Thanks for your order.</h1>
            <h2 className="detail">We will email you when your items ship.</h2>
            <Link href="/">
                <a className="link">Browse more product</a>
            </Link>
        </main>
    </Fragment>
)

export default Purchased