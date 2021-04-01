import Link from 'next/link'
import { Fragment, useContext, useState } from 'react';
import {AppContext} from '../../Context/AppContext'
import { initCart, updateCart } from '../utils';

interface AddCartButton {
    product: any;
}


const AddButton = (props: AddCartButton) => {
    const {product} = props
    const [cart, setCart]: any = useContext(AppContext)
    const [shouldShowViewCart, setShouldShowViewCart] = useState<boolean>(false);

    const _handleOnClick = () => {
        if(process.browser) {
            let cart = localStorage.getItem('cart');
            if(cart) {
                cart = JSON.parse(cart);
                const updatedCart = updateCart(cart, product, 1)
                setCart(updatedCart)
                setShouldShowViewCart(true)
            } else {
                const cart = initCart(product)
                setCart(cart);
                setShouldShowViewCart(true)
            }
        }else {
            setShouldShowViewCart(false)

        }

    }
    return (
        <Fragment>
            <a onClick={_handleOnClick} className="btn btn-outline-primary xs-5 ">Add to cart</a>
            {shouldShowViewCart &&
            (
                <Link href="/cart">
            <a className="btn btn-outline-primary xs-5">View Cart</a>
            </Link> 
            )
           
}

        </Fragment>
    )
}

export default AddButton