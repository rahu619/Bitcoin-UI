import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuBar from "./MenuBar";
import InfoCard from "./../Components/Card/Card";
import LineChart from "./../Components/Chart/LineChart";
import Table from "./../Components/Table/Table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  palette: {
    primary: {
      main: "#E33E7F",
    },
  },
}));

function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
          <MenuBar />
        </Grid>
        <Grid item xs={5}>
          <Paper
            className={classes.paper}
            style={{ "margin-top": "9%" }}
            elevation={0}
            square={false}
          >
            <InfoCard
              header={`BitCoin Latest Value`}
              details={`Based on stuff we got from blah blah`}
            />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={0}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
