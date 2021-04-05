import Link from 'next/link';
import { useState } from 'react';

const BillingForm = (props) => {
    const {setBillingInfo} = props
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastname] = useState<string>("");
    const [address1, setAddress1] = useState<string>("");
    const [address2, setAddress2] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [email, setEmail] = useState<string>("");


    const _handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = {firstName, lastName, address1, address2, city, country, postalCode, phoneNumber, email, valid: true}
        setBillingInfo(formData)
    }

    return ( 
    <form className=" m-5" onSubmit={_handleOnSubmit}>
    <fieldset>
        <h2 >Billing Information</h2>
        
    <div className="form-group mt-5">
    <label htmlFor="firstName">First Name</label>
    <input required onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control md-5" id="firstName" aria-describedby="firstName" placeholder="Jhon"/>
</div>
<div className="form-group">
<label htmlFor="lastName">Last Name</label>
<input onChange={(e) => setLastname(e.target.value)} required type="text" className="form-control" id="lastName" aria-describedby="lastName" placeholder="Doe"/>
</div>
<div className="form-group ">
<label htmlFor="address1">Street Address</label>
<input onChange={(e) => setAddress1(e.target.value)} required type="text" className="form-control" id="address1" aria-describedby="address1" placeholder="Street name"/>
</div>
<div className="form-group">
<label htmlFor="address2">Address Line 2 (optional)</label>
<input onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" id="address2" aria-describedby="address2" placeholder="Apartment, unit, etc... (optional)"/>
</div>
<div className="form-group">
<label htmlFor="city">City</label>
<input onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="city" aria-describedby="city" placeholder="Santo Domingo"/>
</div>
<div className="form-group">
<label htmlFor="country">Country</label>
<input onChange={(e) => setCountry(e.target.value)} type="text" className="form-control" id="country" aria-describedby="country" placeholder="Dominican Republic"/>
</div>
<div className="form-group">
<label htmlFor="postalCode">Postal Code</label>
<input onChange={(e) => setPostalCode(e.target.value)} type="text" className="form-control" id="postalCode" aria-describedby="postalCode" placeholder="Dominican Republic"/>
</div>
<div className="form-group">
<label htmlFor="phoneNumber">Phone Number</label>
<input onChange={(e) => setPhoneNumber(e.target.value)} type="tel" className="form-control" id="phoneNumber" aria-describedby="phoneNumber" placeholder=""/>
</div>
<div className="form-group">
<label htmlFor="email">Email address</label>
<input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
<small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
</fieldset>

<div className="form-check mt-5">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value=""/>
          <p>Pay with Paypal</p>
        </label>
      </div>
        <button type="submit" className="btn btn-outline-primary mt-4 mb-5">Place Order</button>
</form>
)
}
export default BillingForm;