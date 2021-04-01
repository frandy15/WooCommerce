import Layout from '../../components/Layout';
import { PRODUCT_BY_CATEGORY } from '../../utils/Apollo/Query/Product';
import ApolloClient from '../../utils/Apollo/Client'
import Product from '../../components/Product/Product';

const CategoryPage = (props) => {
    const {productList} = props;
    return (
        <Layout>
            <div className="container">
            <div className="mt-5">
        <h2 className="m-5">{props.category} Best sellers</h2>
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


CategoryPage.getInitialProps = async (context) => {
    const {slug, id} = context.query;

    const categoryId = slug ? parseInt(slug.split('-').pop()) : id
    const category = slug.split('-')[0];
    const productsQueryByCategory = await ApolloClient.query({query: PRODUCT_BY_CATEGORY, variables: {id: categoryId}}) 
    return {
        productList: productsQueryByCategory.data.products.nodes,
        category
    }
}

export default CategoryPage;