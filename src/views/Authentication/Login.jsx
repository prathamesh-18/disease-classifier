// core
import { Link, Typography, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

// styles
import loginStyles from "./styles";

// components
import MyCard from "../../components/Card/MyCard";
import Navbar from "../../components/Navbar/Navbar";

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Disease Classifier
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  // styles
  const classes = loginStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Container>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MyCard />
          </Grid>
        </Grid>
      </Container>

      <Copyright />
    </div>
  );
}
