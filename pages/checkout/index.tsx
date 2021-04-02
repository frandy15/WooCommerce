import Layout from '../../components/Layout';
import BillingForm from '../../components/BillingForm/BillingForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';


const CheckoutPage = () => {
    return (
        <Layout>
            <div className=" d-flex w-100">
            <div className="m-5 w-100">
                    <BillingForm/>
            </div>
            <div className="m-5">
                    <OrderInfo/>
            </div>
            </div>
           
           
    </Layout>
    )
}

export default CheckoutPage;