import BitCoinPriceModel from "../Models/BitCoinPriceModel";

const BaseUrl = `https://localhost:5001/api/v1/bitcoin`;

class BitCoinService {
  constructor() {}

  /**
   * Retrieves the latest bitcoin values
   * @returns {Promise<BitCoinPriceModel[] | Error>}
   */
  static async RetrieveLatest() {
    // debugger;
    return new Promise(async (resolve, reject) => {
      let result = null;
      try {
        // debugger;
        let response = await fetch(`${BaseUrl}/latest`);
        if (response.ok) {
          let json = await response.json();
          result = json.map(
            (item) => new BitCoinPriceModel(item.date, item.usd)
          );
        }
        resolve(result);
      } catch (err) {
        console.error(`Error upon retrieving: `, err);
        reject(err);
      }
    });
  }
}

export default BitCoinService;
