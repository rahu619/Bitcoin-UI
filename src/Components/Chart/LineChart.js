import * as React from "react";
import Paper from "@material-ui/core/Paper";
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

  get currentYear() {
    return new Date().getFullYear();
  }

  render() {
    let refinedData = this.props.bitcoinCollection.map(
      (x) => new BitCoinPriceModel(x.Date, Math.round(x.Value))
    );

    console.log("chart data:", refinedData);
    return (
      <Paper>
        <Chart data={refinedData} height={450}>
          <ArgumentScale factory={scaleTime} />
          <ValueScale factory={scaleLog} modifyDomain={modifyDomain} />
          <ArgumentAxis />
          <ValueAxis tickFormat={format} />

          <LineSeries valueField="Value" argumentField="Date" />
          <Title
            text={`Average USD market trend across bitcoin exchanges (${this.currentYear})`}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default LineChart;
