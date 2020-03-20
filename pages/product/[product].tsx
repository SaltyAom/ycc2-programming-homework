import { useState, Fragment } from 'react'

import Head from 'next/head'

import { GetStaticProps, GetStaticPaths } from 'next'

import Link from 'next/link'

import {
    productDetail,
    productName,
    serialize,
    serializePath,
    deserialize
} from 'libs/product'

import { ProductPageComponent } from 'libs/product/types'

import 'styles/product.styl'

const ProductPage: ProductPageComponent = ({
    title,
    product: {
        detail,
        image: { normal, retina },
        storage,
        price
    }
}) => {
    let [selected, updateSelected] = useState(storage[0])

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={`${title} - YCC2 Homework`} />
                <meta name="og:title" content={`${title} - YCC2 Homework`} />
                <meta name="Twitter:title" content={`${title} - YCC2 Homework`} />
            </Head>
            <main id="product-page">
                <aside className="navigation">
                    <Link href="/">
                        <a className="back">Back</a>
                    </Link>
                </aside>
                <article id="product">
                    <img
                        className="image"
                        srcSet={`${normal}, ${retina} 2x`}
                        src={retina}
                        alt={title}
                    />
                    <section id="product-detail">
                        <header className="header">
                            <h1 className="title">Customize your {title}</h1>
                            {detail.map(detail => (
                                <p className="overview" key={detail}>
                                    {detail}
                                </p>
                            ))}
                        </header>
                        <h2 className="sub-title">Storage</h2>
                        {storage.map(storage => (
                            <p
                                className={`option ${
                                    storage === selected ? '-selected' : ''
                                }`}
                                onClick={() => updateSelected(storage)}
                                key={storage}
                                tabIndex={0}>
                                {storage}GB SSD Storage
                            </p>
                        ))}
                        <h2 className="sub-title">Pricing</h2>
                        <h3 className="price">
                            {`${price}`.replace(
                                /(\d)(?=(\d\d\d)+(?!\d))/g,
                                '$1,'
                            )}{' '}
                            Baht
                        </h3>
                        <Link href="/purchased">
                            <button className="purchase">Purchase</button>
                        </Link>
                    </section>
                </article>
            </main>
        </Fragment>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    let products = serializePath(productName).map(name => `/product/${name}`)

    return {
        paths: products,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async context => {
    let product = context.params.product as string

    return {
        props: {
            title: deserialize(product),
            product: productDetail[serialize(product)]
        }
    }
}

export default ProductPage
