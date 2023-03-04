const BASE_URL = "https://jsonplaceholder.typicode.com";

export const login = (data) => ({
  type: "LOGIN",
  data,
});

export const getUsers = () => (dispatch) => {
  dispatch({ type: "USERS" });

  fetch(`${BASE_URL}/users/`).then(
    async (res) => {
      const data = await res.json();
      dispatch({ type: "USERS_RECEIVED", data });
    },
    (err) => dispatch({ type: "USERS_ERROR", data: err.json() })
  );
};

export const getPosts = (page) => (dispatch) => {
  dispatch({ type: "POSTS" });

  fetch(`${BASE_URL}/users/${page}/posts`).then(
    async (res) => {
      const data = await res.json();
      dispatch({ type: "POSTS_RECEIVED", data });
    },
    (err) => dispatch({ type: "POSTS_ERROR", data: err.json() })
  );
};
