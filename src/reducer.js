export const initialState = {
  bag: [],
};

const reducer = (state, action) => {
  console.log("Action >", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        bag: [...state.bag, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
