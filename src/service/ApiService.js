import axios from "axios";

axios.defaults.baseURL = "https://snake-back-postgres.herokuapp.com";

export async function createUser(userData) {
  const data = await axios.post(`/api/user`, userData);
  console.log(data);
  return data;
}

export async function getAllUsers() {
  const data = await axios.get(`/api/user`);
  return data;
}

export async function getOneUser({ id }) {
  const data = await axios.get(`api/user/${id}`);
  return data;
}

export async function updateUserScore({ id, ...user }) {
  const { data } = await axios.patch(`api/user/${id}`, { ...user });
  return data;
}

export async function deleteUser(id) {
  await axios.delete(`/user/${id}`);
  return id;
}
