import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["CurrentUser"],
  endpoints: (builder) => ({
    me: builder.query({
      query: () => `users/me`,
      providesTags: ["CurrentUser"],
    }),
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

export const { useMeQuery, useRegisterMutation, useLoginMutation } = api;

export default api;
