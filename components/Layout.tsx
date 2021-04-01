import Head from 'next/head'
import Header from './Header/Header';
import { AppProvider } from './Context/AppContext';

const Layout = (props) => {
    return (
        <AppProvider>
        <div>
            <Head>
                <title>WeeCommerce App</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            </Head>
            <Header/>
            {props.children}
        </div>
        </AppProvider>
     
    )
}

export default Layout;