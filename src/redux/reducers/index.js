import { ADD_NOTIFICATION, CHANGE_NOTIFICATIONS, LOGIN } from "../types";

const initialState = {
  username: null,
  password: null,
  isAutorised: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "USERS_RECEIVED":
      return {
        ...state,
        users: action.data,
      };
    case "POSTS_RECEIVED":
      return {
        ...state,
        posts: [...(state?.posts ?? []), ...action.data],
      };
    case "GET_PAGES_AMOUNT":
      console.log({ action });
      return {
        ...state,
        pagesAmount: 10,
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
