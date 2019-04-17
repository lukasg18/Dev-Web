import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';


@Entity()
export class Atendente extends BaseEntity {
  @PrimaryColumn()
  idpessoa: number;

  @Column({ nullable: false, length: 10, unique: true })
  numeroregistro: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.atendente, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;
}
