import Product from '../product'

import { ProductProps } from 'libs/product/types'

import './product-list.styl'

const ProductList = ({ productList }: { productList: ProductProps[] }) => (
    <section className="product-list">
        {productList.map(product => (
            <Product key={product.title} {...product} />
        ))}
    </section>
)

export default ProductList
