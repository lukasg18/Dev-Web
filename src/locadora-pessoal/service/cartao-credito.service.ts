import { Injectable, Inject } from '@nestjs/common';
import { CartaoCredito } from '../model/cartao-credito.entity';
import { Pagarme } from '../gateways/pagarme';

@Injectable()
export class CartaoCreditoService {
  
  async readAll(): Promise<CartaoCredito[] | any> {
    return CartaoCredito.find();
  }

  async readOne(id: number): Promise<CartaoCredito | any> {
    return CartaoCredito.findOne({ idcartao: id });
  }

  async Create(body: any): Promise<CartaoCredito | any> {
    // to do
  }

}
