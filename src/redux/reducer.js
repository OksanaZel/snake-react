// import { combineReducers } from "redux";
// import { addUser } from "./action";

const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "user/Name":
      return [payload, ...state];

    case "user/score":
      return state.map(user =>
        user.id === payload.id
          ? { ...user, score: user.score + payload.score }
          : user,
      );

    default:
      return state;
  }
};

export default usersReducer;
