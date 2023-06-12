import React from 'react'
import "./signup.css"

const SignUp = () => {
    return (
        <div className="container">
            <h1 className='pageTitle'>Registration Form</h1>
            <form className='form'>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="city">City</label>
                        <input type="text" className="form-control" id="city" placeholder="Enter your city" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="postalCode">Postal Code</label>
                        <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp