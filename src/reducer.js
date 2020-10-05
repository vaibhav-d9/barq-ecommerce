export const initialState = {
  bag: [],
};

export const getBagTotal = (bag) =>
  bag?.reduce((amount, item) => item.productPrice + amount, 0);

const reducer = (state, action) => {
  console.log("Action >", action);

  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        bag: [...state.bag, action.cart],
      };

    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.item],
      };

    case "REMOVE_FROM_BAG":
      const index = state.bag.findIndex((bagItem) => bagItem.id === action.id);
      let newBag = [...state.bag];
      if (index >= 0) {
        newBag.splice(index, 1);
      } else {
        console.warn("Can't remove product!");
      }

      return { ...state, bag: newBag };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
