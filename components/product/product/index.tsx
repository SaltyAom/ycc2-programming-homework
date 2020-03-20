import Link from 'next/link'

import { serialize } from 'libs/product'

import './product.styl'

import ProductComponent from './types'

const Product: ProductComponent = ({
    title,
    detail,
    image: { normal, retina },
    href,
    isNew = false,
    contained = true,
    imageAsBackground = false,
    onTop = false,
}) => {
    let product = (
        <article
            id={serialize(title)}
            className={`product ${onTop ? '-top' : ''} ${
                imageAsBackground ? '-background' : ''
            }`}
            style={{
                backgroundImage: imageAsBackground ? `url(${normal})` : null,
            }}>
            {isNew ? <h3 className="new">New</h3> : null}
            <h1 className="title">{title}</h1>
            <h2 className="detail">{detail}</h2>
            {!contained ? (
                <Link href={href}>
                    <a className="more">Learn more</a>
                </Link>
            ) : null}
            {!imageAsBackground ? (
                <Link href={href}>
                    <a role="figure" className="figure">
                        <img
                            className="image"
                            srcSet={`${normal}, ${retina} 2x`}
                            src={retina}
                            alt={title}
                            loading="lazy"
                        />
                    </a>
                </Link>
            ) : null}
        </article>
    )

    if (!contained) return product

    return (
        <Link href={href}>
            <a className="product-link">{product}</a>
        </Link>
    )
}

export default Product
