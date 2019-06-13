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

  @Column({ nullable: true})
  urlimagem: string;

  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

}
