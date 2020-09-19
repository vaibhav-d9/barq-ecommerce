export const initialState = {
  bag: [],
};

export const getBagTotal = (bag) =>
  bag?.reduce((amount, item) => item.productPrice + amount, 0);

const reducer = (state, action) => {
  console.log("Action >", action);

  switch (action.type) {
    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
