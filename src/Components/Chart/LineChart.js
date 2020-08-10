import * as React from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import {
  ArgumentScale,
  ValueScale,
  Animation,
} from "@devexpress/dx-react-chart";
import { scaleLog, scaleTime } from "d3-scale";
import BitCoinPriceModel from "../../Models/BitCoinPriceModel";

const modifyDomain = () => [100, 100000];
const superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const formatPower = (d) =>
  `${d}`
    .split("")
    .map((c) => superscript[c])
    .join("");
const format = (scale) =>
  scale.tickFormat(
    4,
    (d) => 10 + formatPower(Math.round(Math.log(d) / Math.LN10))
  );

class LineChart extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let bitCoinExchangeCollection = this.props.bitcoinCollection;

    //as we get the data in descending order
    let startDate =
      bitCoinExchangeCollection[bitCoinExchangeCollection.length - 1].Date;
    let endDate = bitCoinExchangeCollection[0].Date;
    let refinedData = bitCoinExchangeCollection.map(
      (x) =>
        new BitCoinPriceModel(
          moment(x.Date).format("MM/DD/YYYY"),
          Math.round(x.Value)
        )
    );

    // console.log("chart data:", refinedData);
    return (
      <Paper>
        <Chart data={refinedData} height={450}>
          {<ArgumentScale factory={scaleTime} />}
          <ArgumentAxis />
          <ValueAxis />

          <LineSeries valueField="Value" argumentField="Date" />
          <Title
            text={`Bitcoin price trend (${moment(startDate).format(
              "DD MMM yyyy"
            )} to ${moment(endDate).format("DD MMM yyyy")})`}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default LineChart;
