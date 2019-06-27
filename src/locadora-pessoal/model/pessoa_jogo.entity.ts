import {
  Entity,
  Column,
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
  ativo = 0,
  inativo = 1,
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
  vitrine: boolean;

  @Column({ nullable: true})
  status: statusEnum;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Jogo, jogo => jogo.pessoajogo, {
    cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idjogo' })
  jogo: Jogo;

  @ManyToOne(type => Pessoa, pessoa => pessoa.pessoajogo, {
    cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;

  @OneToMany(type => Locacao, locacao => locacao.pessoajogo)
  locacao: Locacao[];
}
