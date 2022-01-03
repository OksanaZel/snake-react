import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getUser } from "./actions";
import {
  fetchAllUsers,
  createUser,
  updateUserScore,
  // fetchOneUser,
} from "./operations";

// const users = createReducer([], {
//   [addUser]: (state, { payload }) => [payload, ...state],
//   [changeScore]: (state, { payload }) =>
//     state.map(user =>
//       user.id === payload.id
//         ? { ...user, score: user.score + payload.score }
//         : user,
//     ),
// });

const users = createReducer([], {
  [fetchAllUsers.fulfilled]: (_, action) => action.payload,
  [createUser.fulfilled]: (state, { payload }) => [payload, ...state],
  [updateUserScore.fulfilled]: (state, { payload }) =>
    state.map(user =>
      user.id === payload.id
        ? { ...user, score: user.score + payload.score }
        : 0,
    ),
});

const currentUser = createReducer(
  {},
  {
    [getUser]: (_, action) => action.payload,
  },
);

export default combineReducers({
  users,
  currentUser,
});
