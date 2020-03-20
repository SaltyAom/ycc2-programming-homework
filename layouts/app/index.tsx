import { Fragment } from 'react'

import Navbar from 'components/navbar'
import Footer from 'components/footer'

const AppLayout = ({ children }) => (
    <Fragment>
        <Navbar />
        {children}
        <Footer />
    </Fragment>
)

export default AppLayout
