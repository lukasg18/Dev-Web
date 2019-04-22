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
export class Genero extends BaseEntity {
  @PrimaryGeneratedColumn()
  idgenero: number;

  @Column({ nullable: false})
  nome: string;

  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

}
