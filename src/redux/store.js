import { createStore } from "redux";

const initialState = {
  name: "",
  score: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "user/Name":
      return [...state, payload];

    // case "user/Score":
    //   return;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
