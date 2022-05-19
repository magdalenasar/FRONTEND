import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/todos",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({ url: `/` }),
    }),
    getTodoById: builder.query({
      query: (id) => ({ url: `/${id}` }),
    }),
  }),
});

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// getAllCocktailsByInput(str) => useGetAllCocktailsByInputQuery(str) => data, isLoading, isError
// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
// getCocktailById(id) => useGetCocktailByIdQuery(id) => data, isLoading, isError

export default api;

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = api;
