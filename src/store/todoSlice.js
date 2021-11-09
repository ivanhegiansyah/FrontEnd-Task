import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: true,
    editing: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false,
    editing: true,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
  },

  reducers: {
    deleteContent: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    addContent: (state, action) => {
      console.log(action.payload.title);
      const newData = { id: uuidv4(), ...action.payload };
      state.todos = [...state.todos, newData];
    },

    editContent: (state, action) => {
      console.log(action.payload.id);
      state.todos = state.todos.map((content) => {
        if (content.id === action.payload.id) {
          return { ...content, title: action.payload.title };
        } else {
          return content;
        }
      });
    },

    checkContent: (state, action) => {
      state.todos = state.todos.map((content) => {
        if (content.id === action.payload) {
          return { ...content, completed: !content.completed };
        } else {
          return content;
        }
      });
    },
  },
});

export const { deleteContent, addContent, editContent, checkContent } =
  todoSlice.actions;
export default todoSlice.reducer;
