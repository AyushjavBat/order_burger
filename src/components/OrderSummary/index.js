import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button";

const OrderSummary = props => {
  return (
    <div>
      <h3>Your order</h3>
      <p>Ingredients of your choice : </p>
      <ul>
        {Object.keys(props.ingredients).map(el => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>

      <p>
        <strong>Order amount: {props.price}$</strong>
      </p>

      <p>Do you want to continue?</p>
      <Button clicked={props.onCancel} btnType='Danger' text='CANCEL' />
      <Button clicked={props.onContinue} btnType='Success' text='CONTINUE' />
    </div>
  );
};

const mapStateProps = state => {
  return {
    ingredients: state.burgerReducer.ingredients,
    ingredientNames: state.burgerReducer.ingredientNames,
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateProps)(OrderSummary);
