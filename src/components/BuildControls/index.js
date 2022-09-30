import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerActions";

import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = props => {
  const disabledIngredients = { ...props.burgerIngredients };

  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Burger's price : <strong>{props.price}$</strong>
      </p>

      {Object.keys(props.ingredientNames).map(el => (
        <BuildControl
          key={el}
          ortsHasah={props.ortsHasah}
          ortsNemeh={props.ortsNemeh}
          disabled={disabledIngredients}
          type={el}
          text={props.ingredientNames[el]}
        />
      ))}

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        To Order
      </button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    burgerIngredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ortsNemeh: ingredientName =>
      dispatch(actions.addIngredient(ingredientName)),
    ortsHasah: ingredientName =>
      dispatch(actions.removeIngredient(ingredientName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
