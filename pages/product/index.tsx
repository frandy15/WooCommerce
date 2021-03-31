import Layout from  '../../components/Layout'
import {withRouter} from 'next/router'
import ApolloClient from '../../utils/Apollo/Client'
import { PRODUCT_BY_ID } from '../../utils/Apollo/Query/Product';

interface ProductPageProps {
    product: any;
}

const ProductPage = (props: ProductPage | any) => {
    const {product} = props;
    // alert(JSON.stringify(props.product))
    return (
        <Layout>
            {   product && 

        <div className="card bg-light mb-3 p-5">
            <div className="card-header">{product.name}</div>
            <img src={product.image.sourceUrl} className="card-img-top" alt={`${product.name} image`} srcSet={product.image.srcSet}/>
            <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            </div>
        </div>
    }
        </Layout>

    )
    
}

ProductPage.getInitialProps = async (context) => {
    const {slug, id} = context.query;

    const productId = slug ? parseInt(slug.split('-').pop()) : id
    
    const resultQuery = await  ApolloClient.query(({query: PRODUCT_BY_ID, variables: {id: productId}}))
return {
    product: resultQuery.data.simpleProduct
}

}

export default withRouter(ProductPage);