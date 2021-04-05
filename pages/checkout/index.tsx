import Layout from '../../components/Layout';
import BillingForm from '../../components/BillingForm/BillingForm';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CHECKOUT_MUTATION } from '../../utils/Apollo/Query/Product';
import  ApolloClient  from '../../utils/Apollo/Client';


const CheckoutPage = () => {
    const [billingInfo, setBillingInfo] = useState(null);
    
    if(billingInfo?.valid) {
        const [ checkout, { data: checkoutResponse, loading: checkoutLoading, error: checkoutError } ] = useMutation( CHECKOUT_MUTATION, {
            variables: {
                input: billingInfo
            },
            onCompleted: () => {
                console.warn( 'completed CHECKOUT_MUTATION' );
            },
            onError: ( error ) => {
                if ( error ) {
                    console.error(`error`, error);
                }
            }
        } );
    }
                   // Checkout or CreateOrder Mutation.
	
    
    useEffect(() => {
        setBillingInfo(billingInfo)
    }, [billingInfo])
    return (
        <Layout>
            <div className=" d-flex w-100">
            <div className="m-5 w-100">
                    <BillingForm setBillingInfo={setBillingInfo}/>
            </div>
            <div className="m-5">
                    <OrderInfo/>
            </div>
            </div>
           
           
    </Layout>
    )
}

export default CheckoutPage;