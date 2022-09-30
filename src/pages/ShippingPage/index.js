import React from "react";

import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
  cancelOpder = () => {
    this.props.history.goBack();
  };
  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>We hope your order will be delicious.</strong>
        </p>
        <p style={{ fontSize: "24px" }}>
          <strong>Total Price : {this.props.price}$</strong>
        </p>
        <Burger />
        <Button
          clicked={this.cancelOpder}
          btnType='Danger'
          text='ORDER CANCEL'
        />
        <Button
          clicked={this.showContactData}
          btnType='Success'
          text='ENTER SHIPPING INFORMATION'
        />
        <Route path='/ship/contact'>
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
