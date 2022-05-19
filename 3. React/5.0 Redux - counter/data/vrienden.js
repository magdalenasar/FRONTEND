import { rand } from "../helpers.js";

// 1) initialState
const initialState = [
  {
    id: rand(),
    vriend: "Cissy",
  },
  {
    id: rand(),
    vriend: "Stijn",
  },
  {
    id: rand(),
    vriend: "Aron",
  },
];
// 2) ACTION TYPES
const ADD_FRIEND = "ADD_FRIEND";
const REMOVE_FRIEND = "REMOVE_FRIEND";
// 3) ACTION CREATORS
export const addFriend = (str) => ({
  type: ADD_FRIEND,
  payload: str,
});
export const removeFriend = (id) => ({
  type: REMOVE_FRIEND,
  payload: id,
});
// 4) REDUCER
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FRIEND:
      return [...state, { id: rand(), vriend: payload }];
    case REMOVE_FRIEND:
      return state.filter((vriend) => vriend.id != payload);
    default:
      return state;
  }
};
