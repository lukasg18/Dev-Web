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
  idPagarMe: string;

  @Column({ type: 'text', nullable: false })
  band: string;

  @Column({ type: 'text', nullable: false })
  nome: string;

  @Column({ type: 'text', nullable: false })
  primeiroDigito: string;

  @Column({ type: 'text', nullable: false })
  ultimosDigitos: string;

  @Column({ type: 'text', nullable: false })
  fingeprint: string;

  @Column({ type: 'text', nullable: false })
  dataValidade: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pessoa, pessoa => pessoa.cartao, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;
}
