import { useMemo } from 'react'

import Navigation from './navigation'

import { productName, productLink } from 'libs/product'

import './navbar.styl'

const Navbar = () => {
    let title = useMemo(() => productName, []),
        href = useMemo(() => productLink, [])

    return (
        <nav id="navbar">
            {title.map((name, index) => (
                <Navigation
                    key={name}
                    title={name}
                    href={href[index]}
                />
            ))}
        </nav>
    )
}

export default Navbar
