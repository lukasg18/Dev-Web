import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PessoaJogo } from './pessoa_jogo.entity';


@Entity()
export class Jogo extends BaseEntity {
  @PrimaryGeneratedColumn()
  idjogo: number;

  @Column({ nullable: false})
  nome: string;

  @Column({ nullable: false})
  anolancamento: Date;

  @Column({ nullable: false})
  urlimagem: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => PessoaJogo, pessoajogo => pessoajogo.jogo)
  pessoajogo: PessoaJogo;
}
