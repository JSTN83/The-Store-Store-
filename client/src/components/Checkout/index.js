import React from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col } from "../Grid";
import styles from "./style.css";

const Checkout = withRouter(({ history }) => {

  const submitForm = (e) => {
    e.preventDefault();
    history.push('/success')
  }

  return ( 
    <form className="mt-5" onSubmit={submitForm} >
        <Row>
          <Col size="6">
            <h3>Billing Address</h3>
            <div>
              <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="George Doe" />
            </div>
            <div>
              <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
              <input type="text" id="email" name="email" placeholder="george@example.com" />
            </div>
            <div>
              <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
              <input type="text" id="adr" name="address" placeholder="42 W. Fake Street" />
            </div>
            <div>
              <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
              <input type="text" id="city" name="city" placeholder="New York" />
            </div>
            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </Col>

        <Col size="6">
          <h3>Payment</h3>
          <label htmlFor="fname">Accepted Cards</label>
          <div className="icon-container">
            <i className="fa fa-cc-visa" style={{color:"navy"}}></i>
            <i className="fa fa-cc-amex" style={{color:"blue"}}></i>
            <i className="fa fa-cc-mastercard" style={{color:"red"}}></i>
            <i className="fa fa-cc-discover" style={{color:"orange"}}></i>
          </div>
          <label htmlFor="cname">Name on Card</label>
          <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
          <label htmlFor="ccnum">Credit card number</label>
          <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
          <label htmlFor="expmonth">Exp Month</label>
          <input type="text" id="expmonth" name="expmonth" placeholder="September" />
          <div className="row">
            <div className="col-50">
              <label htmlFor="expyear">Exp Year</label>
              <input type="text" id="expyear" name="expyear" placeholder="2018" />
            </div>
            <div className="col-50">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" placeholder="352" />
            </div>
          </div>
        </Col>
      </Row>
      <label>
        <input type="checkbox" defaultChecked name="sameadr" /> Shipping address same as billing
      </label>
      <button className="btn btn-success">Submit</button>
    </form>
  );
})

export default Checkout;