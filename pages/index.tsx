import Layout from '../components/Layout';
import {apiConfig} from '../config';
import Product from '../components/Product/Product';
import ApolloClient from '../utils/Apollo/Client'
import {PRODUCTS_QUERY} from '../utils/Apollo/Query/Product'
interface IndexPageProps {
    productList: any
}
const IndexPage = ({productList}: IndexPageProps) => {
    return (
        <Layout>
            <div className='p-wrapper'>
            {productList.length && (
                productList.map(product => 
                    <Product product={product} />
                )
            )}
            </div>
           
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {

const resultQuery = await ApolloClient.query({query: PRODUCTS_QUERY}) 
    
return {
    productList: resultQuery?.data?.products?.nodes
}
};



export default IndexPage;