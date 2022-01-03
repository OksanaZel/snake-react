import { createAction } from "@reduxjs/toolkit";

// export const addUser = createAction("users/Name", ({ name, score = 0 }) => ({
//   payload: {
//     name,
//     score,
//   },
// }));

export const getUser = createAction("users/getUser");

// export const changeScore = createAction("users/score", ({ id, score }) => ({
//   payload: {
//     id,
//     score,
//   },
// }));
