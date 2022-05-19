import { nanoid } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const todoApi = createApi({
  reducerPath: "todoState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/todos",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `/`,
      providesTags: ["TODOALL"],
    }),
    getTodoById: builder.query({
      query: (id) => `/${id}`,
    }),
    postTodo: builder.mutation({
      query: (todo) => ({
        url: `/`,
        method: "POST",
        body: {
          id: nanoid(),
          checked: false,
          todo,
        },
      }),
      invalidatesTags: ["TODOALL"],
    }),
    removeTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TODOALL"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["TODOALL"],
    }),
  }),
});

export default todoApi;
export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  usePostTodoMutation,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
