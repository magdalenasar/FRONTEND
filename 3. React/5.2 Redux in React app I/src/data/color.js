import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    color: "#ff000",
    name: "red",
  },
  {
    id: nanoid(4),
    color: "#00ff00",
    name: "green",
  },
];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload: { color, name } }) {
      state.push({
        id: nanoid(4),
        color,
        name,
      });
    },
    removeColor(state, { payload: id }) {
      state.splice(
        findIndex((color) => color.id === id),
        1
      );
    },
    changeColor(state, { payload: { id, color } }) {
      state.find((color) => color.id === id).color = color;
    },
    changeName(state, { payload: { id, name } }) {
      state.find((color) => color.id === id).name = name;
    },
  },
});

// each case under reducers becomes an action
export default colorSlice;
export const { addColor, removeColor, changeColor, changeName } =
  colorSlice.actions;
