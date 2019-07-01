import { Jogo } from "../model/jogo.entity";
const moment = require('moment')


const Axios = require('axios')

interface TransactionPagarMe {
  amount?: number;
  card_id?: string;
  payment_method?: string;
  postback_url?: string;
  async?: boolean;
  installments?: number;
  boleto_expiration_date?: string;
  soft_descriptor?: string;
  capture?: boolean;
  boleto_instructions?: string;
  split_rules?: any[];
  customer?: any;
  billing?: any;
  shipping?: any;
  items?: any[];
  metadata?: any;
  session?: string;
  local_time?: string;
}

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
      
    async createTransaction (data:any): Promise<any> {

      const {pagamento, locacao} = data
      const {pessoa} = pagamento.cartaocredito
      
      const {cep: endereco } = pessoa 
      
      const billing = {
        name: pessoa.nome,
        address: {
          street: endereco.logradouro !== null ? endereco.logradouro : endereco.bairro.nome  ,
          city: endereco.bairro.municipio.nome,
          state: endereco.bairro.municipio.estado.nome,
          zipcode: "29160182" ,
          country: 'br',
          neighborhood: endereco.bairro.nome
        }
      };

      const jogo = await Jogo.findOne({where: {idjogo: locacao.pessoajogo.idjogo}})

      const customer = {
        external_id: (pessoa.idpessoa).toString(),
        type: "individual",
        country: "br",
        name: pessoa.nome,
        email: pessoa.email,
        documents: [
            {
                type: "cpf",
                number: "14869122731"
            }
        ],
        phone_numbers: ["+5527995038835"]
      }
      
      const item = {
        id: jogo.idjogo.toString(),
        title: jogo.nome,
        unit_price: pagamento.valor,
        quantity: 1,
        tangible: true
      };
      
      let transaction = {
        async: false,
        amount: (pagamento.valor) * 100,
        billing,
        customer,
        items: [item],
        metadata: pagamento
      } as TransactionPagarMe;

      if (pagamento.metodopagamento === 1) {
        const { cartaocredito } = pagamento
                
        if (cartaocredito) {
          transaction.card_id = "card_cjxac27t30hlt3x6e7qac3279" ;
          transaction.payment_method = "credit_card";
        }
      } else {
        transaction.payment_method = "boleto";
        transaction.boleto_expiration_date = (moment().add(3, 'days')).format('YYYY-MM-DD');
        transaction.capture = true;
      }
      
     
      const { data: pagarmeResponse } = await this._client.post("transactions", transaction);
    
      return "pagarmeResponse"
    }

}