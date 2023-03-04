const initialState = {
  username: null,
  password: null,
  isAutorised: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_RECEIVED":
      return {
        ...state,
        users: action.data,
        pagesAmount: action.data.length,
      };
    case "POSTS_RECEIVED":
      const iteratedPosts = action.data.map((post) => ({
        ...post,
        key: `${new Date().getMilliseconds()}-${post.id}`,
      }));

      return {
        ...state,
        posts: [...(state?.posts ?? []), ...iteratedPosts],
      };
    case "LOGIN":
      return {
        ...state,
        username: action.data.username,
        password: action.data.password,
        isAutorised: true,
      };

    default:
      return state;
  }
};
