import axios from "axios";

axios.defaults.baseURL = "https://snake-back-postgres.herokuapp.com";

export async function getAllUsers() {
  const { data } = await axios.get(`/api/user`);
  return data.data;
}

export async function createUser(userData) {
  const { data } = await axios.post(`/api/user`, userData);
  return data.data.user;
}

// export async function getOneUser({ id }) {
//   const { data } = await axios.get(`api/user/${id}`);
//   return data.data;
// }

export async function updateUserScore({ id, score }) {
  const { data } = await axios.patch(`api/user/${id}`, { score });
  return data.data;
}

// export async function deleteUser(id) {
//   await axios.delete(`/user/${id}`);
//   return id;
// }
