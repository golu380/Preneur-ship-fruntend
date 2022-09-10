// eslint-disable-next-lin
import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { unSetUserToken } from '../features/authSlice';
// import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from "./auth/ChangePassword";
// eslint-disable-next-lin
import {
  useGetLoggedUserQuery,
  useLogoutUserQuery,
} from "../services/userAuthApi";
import { useEffect, useState } from "react";
import { setUserInfo, unsetUserInfo } from "../features/userSlice";
const Dashboard = () => {
  const handleLogout = () => {
    // dispatch(unsetUserInfo({ name: "", email: "" }))
    // dispatch(unSetUserToken({ access_token: null }))
    // const { access_token} = getToken();
    // const { logout ,isSuccess} = useLogoutUserQuery(access_token);
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access_token = localStorage.getItem("access_token");
  console.log(access_token);
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  console.log(data);
  const [userData, setUserData] = useState({
    email: "",
    username: "",
  });

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        username: data.username,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.email,
          username: data.username,
        })
      );
    }
  }, [data, isSuccess, dispatch]);

  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>Dashboard</h1>
          <Typography variant="h5">Email: {userData.email}</Typography>
          <Typography variant="h6">Username: {userData.username}</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
