import App from 'next/app'

class Next extends App {
    render() {
        let { Component, pageProps } = this.props

        return <Component {...pageProps} />
    }
}

export default Next
