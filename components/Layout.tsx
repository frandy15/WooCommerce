import Head from 'next/head'
import Header from './Header/Header';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>WeeCommerce App</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            </Head>
            <Header/>
            {props.children}
        </div>
    )
}

export default Layout;