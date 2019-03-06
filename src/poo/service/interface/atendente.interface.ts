import { genericInterface } from "./generic.interface";
import { Atendente } from "../../model/atendente.entity";

export interface IAtendente extends genericInterface<Atendente> {
    
  buscaRegistro(cpf);

}
