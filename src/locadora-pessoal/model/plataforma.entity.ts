import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Jogo } from './jogo.entity';


@Entity()
export class Plataforma extends BaseEntity {
  @PrimaryGeneratedColumn()
  idplataforma: number;

  @Column({ nullable: false})
  nome: string;

  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToMany(type => Jogo, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'jogo_plataforma',
    joinColumn: {
      name: 'idplataforma',
    },
    inverseJoinColumn: {
      name: 'idjogo',
    },
  })
  jogo: Jogo[];

}
