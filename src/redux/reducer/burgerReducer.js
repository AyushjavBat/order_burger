const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },

  totalPrice: 10,
  purchasing: false,
  ingredientNames: {
    salad: "Salad",
    bacon: "Bacon",
    cheese: "Cheese",
    meat: "Meat",
  },
};

const INGREDIENT_PRICES = { salad: 2, cheese: 3, bacon: 4, meat: 5 };

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      purchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice =
      state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      },

      totalPrice: newPrice,
      purchasing: newPrice > 10,
    };
  }
  return state;
};

export default reducer;
