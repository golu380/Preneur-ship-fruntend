import {
  TextField,
  Button,
  Box,
  Alert,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserToken } from "../../../features/authSlice";
import React from "react";
import axios from "axios";
// import { getToken, storeToken } from '../../services/LocalStorageService';
import {
  useLoginUserMutation,
  useEntrepreneurDataQuery,
} from "../../../services/userAuthApi";

const UserLogin = () => {
  // const access_token = localStorage.getItem("access_token")
  // const  entrepreneurData  =  useEntrepreneurDataQuery(access_token);
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      username: data.get("username"),
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    console.log(res);
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data);
    }

    // console.log(typeof (res.data))
    // console.log(res.data)
    // storeToken(res.data.token)
    if (!res.data.token) {
      return console.log("Error while Login");
    }
    localStorage.setItem("access_token", res.data.token);
    localStorage.setItem("id", res.data.user.id);

    const access_token = localStorage.getItem("access_token");
    // console.log(access_token)
    axios({
      method: "get",
      url: "https://10doshi12.pythonanywhere.com/api/configuration-view/",
      headers: {
        Authorization: `Token ${access_token}`,
      },
    }).then((response) => {
      // console.log(response)

      if (response.data[0]) {
        navigate("/app/single/explore");
      } else {
        navigate("/app/single/selection");
      }
    });

    // if(getData[0]){
    //   navigate('/entrepreneur/partners/home')
    // }
    // else{
    //   navigate('/entrepreneur/welcome-page')
    // }
  };
  // let { access_token } = getToken()
  // useEffect(() => {
  //   dispatch(setUserToken({ access_token: access_token }))
  // }, [access_token, dispatch])

  return (
    <>
      {server_error.non_field_errors
        ? console.log(server_error.non_field_errors[0])
        : ""}
      {server_error.email ? console.log(server_error.email[0]) : ""}
      {server_error.password ? console.log(server_error.password[0]) : ""}
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={HandleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="username"
          label="username"
        />
        {server_error.username ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.username[0]}
          </Typography>
        ) : (
          ""
        )}
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        {server_error.password ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password[0]}
          </Typography>
        ) : (
          ""
        )}
        <Box textAlign="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Login
            </Button>
          )}
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
