/**
 * Viewmodel for retrieving bitcoin values.
 */
export default class BitCoinPriceModel {
  constructor(date, value) {
    this.Date = new Date(date);
    this.Value = value;
  }
}
