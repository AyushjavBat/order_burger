import React from "react";
import css from "./style.module.css";

const Order = props => {
  console.log(props.order);
  return (
    <div className={css.Order}>
      <p>
        <strong>Address : </strong>
        {props.order.address.name} | {props.order.address.unit} |
        {props.order.address.street} | {props.order.address.city}
      </p>
      <p>
        <strong>Ingredients : </strong>
        Bacon : {props.order.ingredients.bacon} Cheese :
        {props.order.ingredients.cheese} Meat : {props.order.ingredients.meat}
        Salad : {props.order.ingredients.salad}
      </p>

      <p>
        <strong>Total amount : {props.order.total} $</strong>
      </p>
    </div>
  );
};

export default Order;
