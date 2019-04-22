import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';


@Entity()
export class CartaoCredito extends BaseEntity {
  @PrimaryGeneratedColumn()
  idcartao: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  numero: string;

  @Column({ nullable: false })
  datavencimento: Date;

  @Column({ nullable: false })
  codigo: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.cartao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;
}
