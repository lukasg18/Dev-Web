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

  @Column({ nullable: false})
  anolancamento: Date;

  @Column({ nullable: false})
  urlimagem: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => PessoaJogo, pessoajogo => pessoajogo.jogo)
  pessoajogo: PessoaJogo;

  @ManyToMany(type => Genero, {eager:true, cascade: true, onDelete: "CASCADE"})
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

  @ManyToMany(type => Plataforma, {eager:true, cascade: true, onDelete: "CASCADE"})
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
