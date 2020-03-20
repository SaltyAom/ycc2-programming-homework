import { FunctionComponent } from 'react'

interface NavigationProps {
    title: string
    href: string
}

type NavigationComponent = FunctionComponent<NavigationProps>
export default NavigationComponent
