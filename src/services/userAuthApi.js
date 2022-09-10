import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://10doshi12.pythonanywhere.com/api/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "user/register",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "user/login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: "user/user",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    logoutUser: builder.query({
      query: (access_token) => {
        return {
          url: "user/logout",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: "user/changepassword",
          method: "POST",
          body: actualData,
          headers: {
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "user/send-reset-password-email",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `user/reset-password/${id}/${token}`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    entrepreneurWelcome: builder.mutation({
      query: (user) => {
        const access_token = localStorage.getItem("access_token");
        console.log("user data ", user);
        return {
          url: "verification/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    entrepreneurData: builder.query({
      query: (access_token) => {
        return {
          url: "verification/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    updateEntrepreneurData: builder.mutation({
      query: (actualData) => {
        const id = localStorage.getItem("eid");
        const access_token = localStorage.getItem("access_token");
        return {
          url: `verification/${id}/`,
          method: "PUT",
          body: actualData,
          headers: {
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    entrepreneurPortfolioGetData: builder.query({
      query: (access_token) => {
        return {
          url: "portfolio/",
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    entrepreneurPortfolioPostData: builder.mutation({
      query: (actualData) => {
        const access_token = localStorage.getItem("access_token");
        return {
          url: "portfolio/",
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
    entrepreneurPortfolioPutData: builder.mutation({
      query: (actualData) => {
        console.log("actualData", actualData);
        const id = localStorage.getItem("entrepreneurPortfolio_id");
        const access_token = localStorage.getItem("access_token");
        return {
          url: `portfolio/${id}/`,
          method: "PUT",
          body: actualData,
          headers: {
            "Content-type": "application/json",
            Authorization: `Token ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useEntrepreneurPortfolioPutDataMutation,
  useEntrepreneurPortfolioPostDataMutation,
  useEntrepreneurPortfolioGetDataQuery,
  useUpdateEntrepreneurDataMutation,
  useEntrepreneurDataQuery,
  useEntrepreneurWelcomeMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetLoggedUserQuery,
  useLogoutUserQuery,
  useChangeUserPasswordMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
} = userAuthApi;
