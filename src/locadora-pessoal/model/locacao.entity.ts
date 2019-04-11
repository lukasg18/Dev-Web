import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PessoaJogo } from './pessoa_jogo.entity';
import { Pessoa } from './pessoa.entity';
import { Avaliacao } from './avaliacao.entity';
import { Pagamento } from './pagamento.entity';

export enum statusEnum {
  ativo = 1,
  inativo = 0,
}

@Entity()
export class Locacao extends BaseEntity {
  @PrimaryColumn()
  idlocacao: number;

  @Column({ nullable: false})
  datalocacao: Date;

  @Column({ nullable: false})
  datadevolucao: Date;

  @Column({ nullable: false})
  status: statusEnum;


  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => PessoaJogo, pessoajogo => pessoajogo.locacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idpessoajogo"})
  pessoajogo: PessoaJogo;

  @ManyToOne(type => Pessoa, pessoa => pessoa.locacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;

  @OneToMany(type => Avaliacao, avaliacao => avaliacao.locacao)
  avaliacao:Avaliacao[]

  @OneToMany(type => Pagamento, pagamento => pagamento.locacao)
  pagamento:Pagamento[]


}
