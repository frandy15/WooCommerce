import Layout from '../../components/Layout';


const CheckoutPage = () => {

    return (
        <Layout>
            <div className="container m-5">
            <form className="d-xl-flex flex-row w-100">
            <fieldset>
                <h2 >Billing Information</h2>
                
    <div className="form-group mt-5">
      <label htmlFor="firstName">First Name</label>
      <input required type="text" className="form-control" id="firstName" aria-describedby="firstName" placeholder="Jhon"/>
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input required type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Doe"/>
    </div>
    <div className="form-group ">
      <label htmlFor="address1">Street Address</label>
      <input required type="text" className="form-control" id="address1" aria-describedby="address1" placeholder="Street name"/>
    </div>
    <div className="form-group">
      <label htmlFor="address2">Address Line 2 (optional)</label>
      <input type="text" className="form-control" id="address2" aria-describedby="address2" placeholder="Apartment, unit, etc... (optional)"/>
    </div>
    <div className="form-group">
      <label htmlFor="city">City</label>
      <input type="text" className="form-control" id="city" aria-describedby="city" placeholder="Santo Domingo"/>
    </div>
    <div className="form-group">
      <label htmlFor="country">Country</label>
      <input type="text" className="form-control" id="country" aria-describedby="country" placeholder="Dominican Republic"/>
    </div>
    <div className="form-group">
      <label htmlFor="postalCode">Postal Code</label>
      <input type="text" className="form-control" id="postalCode" aria-describedby="postalCode" placeholder="Dominican Republic"/>
    </div>
    <div className="form-group">
      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder=""/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  </fieldset>
</form>
            </div>
           
    </Layout>
    )
}

export default CheckoutPage;