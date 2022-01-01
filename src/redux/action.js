import { nanoid } from "nanoid";

export const addUser = ({ name, score = 0 }) => ({
  type: "user/Name",
  payload: {
    id: nanoid(2),
    name,
    score,
  },
});

export const changeScore = (id, score) => ({
  type: "user/score",
  payload: { id, score },
});
