import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, password }) => ({
        url: "users/register",
        method: "POST",
        body: { username, password },
      }),
      invalidatesTags: ["CurrentUser"], // update any other place that provides CurrentUser tag
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "users/login",
        method: "POST",
        body: { username, password },
      }),
      invalidatesTags: ["CurrentUser"], // update any other place that provides CurrentUser tag
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = api;

export default api;
