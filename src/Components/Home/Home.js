import React, { Component } from "react";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuBar from "../../Views/MenuBar";
import InfoCard from "../Card/Card";
import LineChart from "../Chart/LineChart";
import Table from "../Table/Table";
import Spinner from "../../Views/Spinner";
import BitCoinService from "../../Services/BitCoinService";
import BitCoinPriceModel from "../../Models/BitCoinPriceModel";

const useStyles = (theme) => ({
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
});

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  async componentWillMount() {
    await this.setItems();
  }

  /**
   * Assigns the values to state.
   * @returns {void}
   */
  async setItems() {
    let data = await BitCoinService.RetrieveLatest();
    this.setState({ data: data });
  }

  /**
   * For getting the last updated value.
   * @returns {BitCoinPriceModel}
   */
  get LatestValue() {
    // as result set is in descending order
    return this.state.data[0];
  }

  render() {
    const { classes } = this.props;
    if (this.state.data == null) {
      return <div>{<Spinner />}</div>;
    } else {
      return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MenuBar />
            </Grid>
            <Grid item xs={5}>
              <Paper
                className={classes.paper}
                style={{ marginTop: "3%" }}
                elevation={0}
                square={false}
              >
                <InfoCard
                  header={`BitCoin Info`}
                  details={`The latest currency value is ${
                    this.LatestValue.Value
                  } (USD) as of ${moment(this.LatestValue.Date).format(
                    "dddd, Do MMM YYYY"
                  )}`}
                />
              </Paper>
            </Grid>
            <Grid item xs={7}>
              <Paper className={classes.paper} elevation={0}>
                <LineChart bitcoinCollection={this.state.data} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Table bitcoinCollection={this.state.data} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(HomePage);
