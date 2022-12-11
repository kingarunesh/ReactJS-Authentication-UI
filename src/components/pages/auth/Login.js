import React from "react";
import { Grid } from "@mui/material";
import Pic1 from "../../../images/form.png";

const Login = () => {
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{ backgroundImage: `url(${Pic1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
        ></Grid>

        <Grid item lg={5} sm={7} sx={{}}></Grid>
      </Grid>
    </>
  );
};

export default Login;
