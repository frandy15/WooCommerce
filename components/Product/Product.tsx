import styles from './Product.module.css'
import Link from 'next/link'
import AddButton from '../Cart/Components/Add';
interface ProductProps {
    product:any
}
const Product = (props: ProductProps) => {
    const {product} = props

    return (               
    <div >
        <div className={`card mb-10 ${styles.product}`}>
            <h4 className="card-header">{product.name}</h4>
            <Link href={`/product?slug=${product.slug}-${product.productId}`} as={`/product/${product.slug}-${product.productId}`} >
            <a style={{ alignSelf: 'center', height: '50%'}}>
            <img style={{height: '100%', width: '100%',padding: '10px'}} src={product.image.sourceUrl} alt="Product"/>
            </a>
 {/* <h6 className="card-subtitle">{product.short_description}</h6> */}

            </Link>
            {product.salePrice ? <span className="badge badge-success p-2">SALE!</span> : <br/>}
            <div className="card-body d-flex flex-md-column justify-content-around">
                {product.salePrice &&<del><h5 className="card-title">{product.regularPrice} </h5></del> 
}
                <h5 className="card-title"> {product.salePrice ? product.salePrice : product.regularPrice}</h5>
                <i className="fas fa-cart-arrow-down"></i>
                
                <AddButton product={product}/>
            </div>
        </div>
    </div>
    )
    
}
export default Product;