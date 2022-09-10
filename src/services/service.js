import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://10doshi12.pythonanywhere.com/api/portfolio/",
  }),
  endpoints: (builder) => ({
    getDataById: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),

    postdata: builder.mutation({
      query: (user) => ({
        url: "",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});
export const { useGetDataByIdQuery,usePostdataMutation } = dataApi;
