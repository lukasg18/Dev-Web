import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';

export enum recorrenciaEnum {
  mes = 0,
  trimestral = 1,
  anual = 2
}

@Entity()
export class Assinatura extends BaseEntity {
  @PrimaryColumn()
  idassinatura: number;

  @Column({ nullable: false})
  datacontrato: Date;

  @Column({ nullable: false})
  vigencia: Date;

  @Column({ nullable: false})
  recorrencia: recorrenciaEnum;

  @Column({ nullable: false})
  status: boolean;

  @Column({ nullable: false})
  renovacaoautomatica: boolean;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.autenticacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  pessoa: Pessoa;
}
