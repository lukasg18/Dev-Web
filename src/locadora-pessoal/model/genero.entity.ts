import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Jogo } from './jogo.entity';


@Entity()
export class Genero extends BaseEntity {
  @PrimaryColumn()
  idgenero: number;

  @Column({ nullable: false})
  nome: string;

  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToMany(type => Jogo, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'jogo_genero',
    joinColumn: {
      name: 'idgenero',
    },
    inverseJoinColumn: {
      name: 'idjogo',
    },
  })
  jogo: Jogo[];

}
