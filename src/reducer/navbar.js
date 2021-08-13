import { SET_SELECTED_NAVBAR } from "../types";

const initial_state = {value:''};

export const navbarReducer = (state = initial_state, { type, data }) => {
    switch (type) {
    case SET_SELECTED_NAVBAR:
      return { ...state, ...{value:data} };
    default:
      return { ...state };
  }
};
