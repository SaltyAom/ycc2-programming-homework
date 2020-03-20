import { memo } from 'react'

import Link from 'next/link'

import NavigationComponent from './types'

import "./navigation.styl"

const Navigation: NavigationComponent = memo(({ title, href }) => (
    <Link href={`/product/${href}`}>
        <a className="navigation">
            {title}
        </a>
    </Link>
))

export default Navigation