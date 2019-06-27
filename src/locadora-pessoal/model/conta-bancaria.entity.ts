import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';

export enum tipoContaciaEnum {
  saving = 0,
  checking = 1,
}

export enum tipoDocumentoEnum {
  cpf = 0,
  cnpj = 1,
}

@Entity()
export class ContaBancaria extends BaseEntity {
  @PrimaryGeneratedColumn()
  idconta: number;

  @Column({ nullable: false})
  tipoConta: tipoContaciaEnum //corrente ou popança

  @Column({ nullable: false})
  codigoBanco: string;

  @Column({ nullable: false})
  numeroConta: string;

  @Column({ nullable: false})
  verificador: string;

  @Column({ nullable: false})
  agencia: string;

  @Column({ nullable: false})
  numeroDocumento: string;

  @Column({ nullable: false})
  documento: tipoDocumentoEnum;

  @Column({ nullable: false})
  nomeTitular: string;

  @Column({ type:"text", nullable: false})
  principal: boolean;

  @Column({ type:"text", nullable: true})
  metadata: string;

  @Column({ nullable: true})
  idGateway: string;

  @Column({nullable: true})
  recebedorPagarme: string

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.autenticacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  pessoa: Pessoa;
}
