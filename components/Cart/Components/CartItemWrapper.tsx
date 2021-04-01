import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Table from '../../Table/Table';
import Link from 'next/link';

const CartItemWrapper = (props) => {
    const [cart, setCart]: any = useContext(AppContext)
    return (
        <div>
        {
            cart && cart?.products?.length  ? (
                <Table items={cart}/>
            ) : (
                <div className="container m-5"> 
                    <h2>Your cart is empty!</h2>
                    <Link href="/">
                        <a type="button" className="btn btn-primary mt-2 mb-5">Go back to shop</a>
                    </Link> 
                </div>
            )
        }
        </div>
    )
}

export default CartItemWrapper;