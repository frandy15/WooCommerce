import Head from 'next/head'
import Header from './Header/Header';
import { AppProvider } from './Context/AppContext';
import {
    ApolloProvider
  } from '@apollo/client'

  import ApolloClient from '../utils/Apollo/Client';

const Layout = (props) => {
    return (
        <AppProvider>
            <ApolloProvider client={ApolloClient}>
        <div>
            <Head>
                <title>WooCommerce App</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
            </Head>
            <Header/>
            {props.children}
        </div>
        </ApolloProvider>
        </AppProvider>
     
    )
}

export default Layout;