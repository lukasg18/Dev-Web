import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoContato } from './tipo-contato.entity';


@Entity()
export class CartaoCredito extends BaseEntity {
  @PrimaryColumn()
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
