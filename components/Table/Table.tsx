import Link from 'next/link';
import { useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import { deleteProduct } from '../Cart/utils';
import { CHECKOUT_MUTATION } from '../../utils/Apollo/Query/Product';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';


const Table = (props) => {
    const {items} = props
    const [cart, setCart]: any = useContext(AppContext)
    const productsInCart = cart;
    const [addToCart, { data }] = useMutation(CHECKOUT_MUTATION);
    const router = useRouter()

    const _handleCheckout = async () => {
        cart.products.map(product => {
                addToCart({ variables: { 
                    productId: product.productId,
                     qty: product.quantity, 
                     cId: v4() 
                    } 
                });
                return
        }) 
        router.push('https://woocommerce.mybeeapp.io/carrito/')
      
    }
    const _handleOnDelete = (productId) => {
        const updatedProducts = deleteProduct(productsInCart, productId)
        localStorage.setItem('cart', JSON.stringify(updatedProducts))
        setCart(updatedProducts)
        location.reload()
        
    }

    console.log(`Table props`, props.items)
    return (
    <div className="container mt-5">
            <h1>Cart</h1>
        <table className="table table-hover">
    <thead>
    <tr>
     <th scope="col"></th>
      <th scope="col">Image</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
      {items?.products?.map(product => {
          return (
            <tr>    
            <td onClick={() => _handleOnDelete(product.productId)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></td>
            <td><img src={product.image?.sourceUrl} srcSet={product.image?.srcSet} className='w-50' /></td>
            <th scope="row">{product.name}</th>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>${product.totalPrice}</td>
          </tr>
          )
      })}
         <h3 className="mt-5">Cart Total</h3>
          <tr  className="mt-5">
            <th scope="row">Subtotal</th>
            <td scope="row">${items?.totalPrice}</td>
          </tr>
          <tr className="mt-5 table-dark">
            <th scope="row">Total</th>
            <td scope="row">${items?.totalPrice}</td>
        </tr>
        {/* <Link href="https://woocommerce.mybeeapp.io/finalizar-compra/"> */}
        <button className="btn btn-success mt-4 mb-5" onClick={_handleCheckout}>checkout</button>
        {/* </Link> */}

  
  </tbody>
</table>
</div>
    )
}

export default Table;