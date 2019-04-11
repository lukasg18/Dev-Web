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
import { Jogo } from './jogo.entity';
import { Locacao } from './locacao.entity';

export enum statusEnum {
  disponivel = 1,
  indisponivel = 0,
} 

@Entity()
export class PessoaJogo extends BaseEntity {
  @PrimaryColumn()
  idpessoa: number;

  @PrimaryColumn()
  idjogo: number;

  @Column({ nullable: false})
  preco: number;

  @Column({ nullable: false})
  status: statusEnum;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Jogo, jogo => jogo.pessoajogo, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idjogo' })
  jogo: Jogo;

  @ManyToOne(type => Pessoa, pessoa => pessoa.pessoajogo, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;

  @OneToMany(type => Locacao, locacao => locacao.pessoajogo)
  locacao: Locacao[];
}
