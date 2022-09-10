import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Alert,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/LocalStorageService";
import Axios from "axios";
import React from "react";

const Registration = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [password_error, setPassword_error] = useState({
    error: "",
  });
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // console.log(data);
    const actualData = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      // password2: data.get('password2'),
      // tc: data.get('tc'),
    };

    if (actualData.password.length < 8) {
      setPassword_error({ ["error"]: "Password must be 8 character Long" });
    } else {
      setPassword_error({ ["error"]: "" });
      console.log(actualData);
      const res = await registerUser(actualData);
      console.log(res);
      // const url = "http://127.0.0.1:8000/api/user/register"
      // Axios.post(url,actualData).then((res)=>console.log(res))

      if (res.error) {
        // console.log(typeof (res.error.data.errors))
        // console.log(res.error.data.errors)
        setServerError(res.error.data);
      }
      if (res.data) {
        // console.log(typeof (res.data))
        // console.log(res.data)
        // storeToken(res.data.token)
        localStorage.setItem("access_token", res.data.token);
        localStorage.setItem("id", res.data.user.id);
        navigate("/app/single/selection");
      }
    }
  };
  return (
    <>
      {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.name ? console.log(server_error.name[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""}
    {server_error.tc ? console.log(server_error.tc[0]) : ""} */}
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
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
          id="email"
          name="email"
          label="Email Address"
        />
        {/* {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""} */}
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
        {password_error.error ? (
          <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {password_error.error}
          </Typography>
        ) : (
          ""
        )}
        {/* <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' /> */}
        {/* {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""} */}
        {/* <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." /> */}
        {/* {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""} */}
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Registration;
