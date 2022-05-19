/* INITIAL STATE */
const initialState = {
  x: 50,
  y: 100,
  s: 150,
  c: "#00ff00",
};
/* ACTION TYPES */
const SET_SIZE = "SET_SIZE";
const SET_X = "SET_X";
const SET_Y = "SET_Y";
const SET_COLOR = "SET_COLOR";
/* ACTION CREATORS */
export const setSize = (nr) => ({
  type: SET_SIZE,
  payload: nr,
});
export const setX = (nr) => ({
  type: SET_X,
  payload: nr,
});
export const setY = (nr) => ({
  type: SET_Y,
  payload: nr,
});
export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color,
});
/* REDUCER */
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SIZE:
      return { ...state, s: payload };
    case SET_X:
      return { ...state, x: payload };
    case SET_Y:
      return { ...state, y: payload };
    case SET_COLOR:
      return { ...state, c: payload };
    default:
      return state;
  }
};
