import Layout from '../components/Layout';
import Product from '../components/Product/Product';
import ApolloClient from '../utils/Apollo/Client'
import {PRODUCTS_CATEGORIES} from '../utils/Apollo/Query/Product'
import ProductCategory from '../components/Category/Category';
import { Fragment } from 'react';
interface IndexPageProps {
    productList: any,
    categories: any

}
const IndexPage = ({productList, categories}: IndexPageProps) => {
    console.log('categories', categories)
    return (
        <Layout>
            <div className='container'>
            <h2 className="m-5"> Categories</h2>
            <hr className="my-4"/>

            <div className="container mb-5">
            {categories.length && (
                categories.map(category => 
                   category.name !== "Sin categorizar" && <ProductCategory category={category}/>
                )
            )}

            </div>

        <div className="mt-5">
        <h2 className="m-5"> All Products</h2>
            <hr className="my-4"/>
        {productList.length && (
                productList.map(product => 
                    <Product product={product} key={product.id} />
                )
            )}
        </div>
            
            

            </div>
           
        </Layout>
    )
}

IndexPage.getInitialProps = async () => {

    console.log(`Link ${ApolloClient}`)
    const productsQuery = await ApolloClient.query({query: PRODUCTS_CATEGORIES}) 
    
return {
    productList: productsQuery.data.products.nodes,
    categories: productsQuery.data.productCategories.nodes,
}
};



export default IndexPage;