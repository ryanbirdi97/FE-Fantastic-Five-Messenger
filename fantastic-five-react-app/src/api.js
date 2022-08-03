import axios from "axios";

const API = axios.create({
  baseURL: "https://fantastic-five-messenger.herokuapp.com/api",
});

export const fetchUsers = (value) => {
  return API.get(`/users`).then(({ data: { users } }) => {
    console.log(users);
    return users;
  });
};

export const postUser = (user) => {
  return API.post("/users", user).then(({ data: { user } }) => {
    return user;
  });
};

export const patchUserById = (id, { username, avatarUrl }) => {
  return API.patch(`/users/${id}`, { username, avatarUrl }).then(
    ({ data: { user } }) => {
      return user;
    }
  );
};
