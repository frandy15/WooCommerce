import { Fragment, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Link from 'next/link';

const OrderInfo = (props) => {
    const [cart, setCart]: any = useContext(AppContext)

    return (
    <Fragment>
              <h2 className="m-5">Your order</h2>

    <table className="table table-hover">
    <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Product</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
        {cart && cart?.products?.length && cart.products.map(product => {
            return (
                <tr className="table-light">

                <td>
                    <img className="w-50" src={product?.image?.sourceUrl} srcSet={product?.image?.srcSet}/>
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                </tr>
            )
            })} 
          <tr  className="mt-5">
            <th scope="row">Subtotal</th>
            <td scope="row">${cart?.totalPrice}</td>
          </tr>
          <tr className="mt-5 table-dark">
            <th scope="row">Total</th>
            <td scope="row">${cart?.totalPrice}</td>
        </tr>
        
  </tbody>
</table>
            </Fragment>
    )
}

export default OrderInfo;