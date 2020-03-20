import { Fragment } from 'react'

import Head from 'next/head'

import { Product, ProductList } from 'components/product'

import { mainProduct, products } from 'libs/product'

import 'styles/landing.styl'

const Landing = () => (
    <Fragment>
        <Head>
            <title>Product List</title>
        </Head>
        <main id="landing">
            <Product {...mainProduct} />
            <ProductList productList={products} />
        </main>
    </Fragment>
)

export default Landing
