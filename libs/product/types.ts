import { NextPage } from 'next'

interface Image {
    normal: string
    retina: string
}

export type ProductName =
    | 'MacBook Pro'
    | 'Surface'
    | 'Swift'
    | 'XPS'
    | 'ZenBook'

export type ProductDetail<T extends string> = {
    [key in T]?: {
        name: ProductName
        detail: string[]
        image: Image
        storage: number[]
        price: number
    }
}

type ValueOf<T> = T[keyof T]

export interface ProductPageProps {
    title: string
    product: ValueOf<ProductDetail<string>>
}

export type ProductPageComponent = NextPage<ProductPageProps>

export interface ProductProps {
    title: string
    detail: string
    image: Image
    href: string
    isNew?: boolean
    contained?: boolean
    imageAsBackground?: boolean
    onTop?: boolean
}
