import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import background from "../../static/images/bitcoin.jpg";
import moment from "moment";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#EEDBD8",
    height: 400,
  },
  media: {
    height: 65,
    padding: 0,
  },
  header: {
    color: "#000",
    marginBottom: 20,
  },
});

class InfoCard extends Component {
  render() {
    const { classes } = this.props;
    let latest = this.props.latest;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image={background}
            title="Bitcoin bg"
          /> */}
          <CardContent>
            <Typography variant="h5" component="p" className={classes.header}>
              Bitcoin UI
            </Typography>
            <Typography variant="h6" component="p">
              {`The latest currency value is ${latest.Value.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )} (USD) as of ${moment(latest.Date).format(
                "dddd, Do MMM YYYY"
              )}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(InfoCard);
