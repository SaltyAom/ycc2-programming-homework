import { ProductProps, ProductName, ProductDetail } from './types'

export const serialize = (name: string) =>
        name.toLocaleLowerCase().replace(/\ /g, '-'),
    serializePath = (path: string[]) => path.map(name => serialize(name)),
    deserialize = (name: string) =>
        name
            .replace(/\-/g, ' ')
            .replace(/(\b[a-z](?!\s))/g, value => value.toUpperCase())

export const productName: ProductName[] = [
        'MacBook Pro',
        'Surface',
        'Swift',
        'XPS',
        'ZenBook'
    ],
    productLink = serializePath(productName),
    mainProduct: ProductProps = {
        title: 'MacBook Pro',
        detail: 'Prolong in the Dark.',
        image: {
            normal: '/images/landing/macbook.png',
            retina: '/images/landing/macbook@2x.png'
        },
        href: "/product/macbook-pro",
        contained: false,
        isNew: true,
        onTop: true
    },
    products: ProductProps[] = [
        {
            title: 'Surface Pro X',
            detail: 'A New Generation of Surface.',
            href: "/product/surface",
            imageAsBackground: true,
            image: {
                normal: '/images/landing/surface.png',
                retina: '/images/landing/surface@2x.png'
            }
        },
        {
            title: 'Swift 7',
            detail: 'Light and Powerful.',
            href: "/product/swift",
            image: {
                normal: '/images/landing/swift.png',
                retina: '/images/landing/swift@2x.png'
            }
        },
        {
            title: 'XPS',
            detail: 'World of Edge to Edge',
            href: "/product/xps",
            image: {
                normal: '/images/landing/xps.png',
                retina: '/images/landing/xps@2x.png'
            }
        },
        {
            title: 'ZenBook',
            detail: 'Extend the Imagination',
            href: "/product/zenbook",
            image: {
                normal: '/images/landing/zenbook.png',
                retina: '/images/landing/zenbook@2x.png'
            }
        }
    ],
    productDetail: ProductDetail<string> = {
        'macbook-pro': {
            name: 'MacBook Pro',
            detail: [
                '1.4GHz quad‑core 8th‑generation Intel Core i5 processor, Turbo Boost up to 3.9GHz',
                '8GB 2133MHz LPDDR3 memory',
                'Retina display with True Tone',
                'Intel Iris Plus Graphics 645',
                'Two Thunderbolt 3 ports',
                'Touch Bar and Touch ID',
                'Backlit Keyboard - US English'
            ],
            image: {
                normal: '/images/landing/macbook.png',
                retina: '/images/landing/macbook@2x.png'
            },
            storage: [256, 512, 1024],
            price: 64900
        },
        surface: {
            name: 'Surface',
            detail: [
                'Microsoft® SQ1™',
                '8GB or 16GB LPDDR4x RAM',
                'PixelSense™ Display',
                'Microsoft® SQ1™ Adreno™ 685 GPU',
                '2 x USB-C®',
                '1 x Surface Connect port',
                'Surface Keyboard connector port',
                '1 x nano SIM',
                'Compatible with Surface Dial off-screen interaction*',
                'Firmware TPM',
                'Enterprise-grade protection with Windows Hello face sign-inBacklit'
            ],
            image: {
                normal: '/images/products/surface.png',
                retina: '/images/products/surface@2x.png'
            },
            storage: [256, 512, 1024],
            price: 64900
        },
        swift: {
            name: 'Swift',
            detail: [
                '1.5GHz Intel Core i7-8500Y (dual-core, 4MB cache, up to 4.2GHz)',
                '8GB LPDDR3 RAM',
                'Full HD CineCrystal IPS touch display',
                'Microsoft® SQ1™ Adreno™ 685 GPU',
                '2 x Thunderbolt 3 (USB-C), headset jack',
                'Intel Wireless-AC 9260 802.11ac Wi-Fi, Bluetooth'
            ],
            image: {
                normal: '/images/products/swift.png',
                retina: '/images/products/swift@2x.png'
            },
            storage: [256, 512],
            price: 42900
        },
        xps: {
            name: 'XPS',
            detail: [
                '1.8GHz Intel Core i7-8565U (quad-core, 8MB cache, up to 4.6GHz)',
                '16GB 2133MHz DDR3 memory RAM',
                'Intel UHD Graphics 620',
                'Ultra HD UltraSharp InfinityEdge touch display',
                '2 x Thunderbolt 3 (USB-C)',
                '1 x USB-C 3.1',
                'micro SD card reader',
                'headset jack',
                'Killer 1435 802.11ac Wi-Fi'
            ],
            image: {
                normal: '/images/products/xps.png',
                retina: '/images/products/xps@2x.png'
            },
            storage: [256, 512, 1024],
            price: 69900
        },
        zenbook: {
            name: 'ZenBook',
            detail: [
                '2.4GHz Intel Core i9-9980HK (octa-core, 16MB cache, up to 5GHz)',
                '32GB DDR4 RAM',
                'Nvidia GeForce RTX 2060',
                '15.6-inch, OLED Ultra HD, 14-inch Ultra HD touch display',
                '1 x Thunderbolt 3',
                '2 x USB-C 3.1',
                'HDMI 2.0',
                'headset jack',
                'Intel Wi-Fi 6 with Gig+ performance',
                'IR webcam with Windows Hello support'
            ],
            image: {
                normal: '/images/products/zenbook.png',
                retina: '/images/products/zenbook@2x.png'
            },
            storage: [1024],
            price: 109900
        }
    }
