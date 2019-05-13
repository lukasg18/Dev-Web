import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { PessoaJogo } from './pessoa_jogo.entity';
import { Genero } from './genero.entity';
import { Plataforma } from './plataforma.entity';


@Entity()
export class Jogo extends BaseEntity {
  @PrimaryGeneratedColumn()
  idjogo: number;

  @Column({ nullable: false})
  nome: string;

  @Column({type:"text", nullable: false})
  descricao: string;

  @Column({ nullable: false})
  anolancamento: Date;

  @Column({ nullable: false})
  urlimagem: string;

  @Column({ nullable: false})
  classificacao: string;

  @Column({ nullable: false})
  multiplayer: boolean;

  @Column({ nullable: false})
  produtora: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => PessoaJogo, pessoajogo => pessoajogo.jogo)
  pessoajogo: PessoaJogo;

  @ManyToMany(type => Genero, { cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'jogo_genero',
    joinColumn: {
      name: 'idjogo',
    },
    inverseJoinColumn: {
      name: 'idgenero',
    },
  })
  genero: Genero[];

  @ManyToMany(type => Plataforma, {cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'jogo_plataforma',
    joinColumn: {
      name: 'idjogo',
    },
    inverseJoinColumn: {
      name: 'idplataforma',
    },
  })
  plataforma: Plataforma[];
}
