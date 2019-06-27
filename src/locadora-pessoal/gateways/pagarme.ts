const Axios = require('axios')

export class Pagarme {
    public gatewayEndPoint: string;
    public gatewayApiVersion: string;
    public gatewayKey: string
    private _client: any;

    constructor(){
        this.gatewayEndPoint = process.env.GATEWAY_END_POINT || "https://api.pagar.me/1/";
        this.gatewayApiVersion = process.env.GATEWAY_API_VERSION || "2017-08-28";
        this.gatewayKey = process.env.GATEWAY_KEY || "ak_test_w1JYIr846LT54zi5eofZdtYwn29rCs";

        this._client = Axios.create({
            baseURL: this.gatewayEndPoint,
            auth: {
              username: this.gatewayKey,
              password: "x"
            },
            headers: {
              "X-PagarMe-Version": this.gatewayApiVersion
            }
        })
    }

    async createBankAccount (data: any): Promise<any> {
        const pagarmeResponse = await this._client.post("bank_accounts", data)
        return pagarmeResponse.data
    }
    async createRecipient (data: any): Promise<any> {
      const pagarmeResponse = await this._client.post("recipients", data)
      return pagarmeResponse.data
  }
}