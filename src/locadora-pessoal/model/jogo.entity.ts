import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { PessoaJogo } from './pessoa_jogo.entity';


@Entity()
export class Jogo extends BaseEntity {
  @PrimaryColumn()
  idjogo: number;

  @Column({ nullable: false})
  nome: string;

  @Column({ nullable: false})
  anolancamento: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => PessoaJogo, pessoajogo => pessoajogo.jogo)
  pessoajogo: PessoaJogo;
}
