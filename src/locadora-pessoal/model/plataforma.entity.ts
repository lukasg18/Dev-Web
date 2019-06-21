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

export enum statusEnum {
  ativo = 0,
  inativo = 1,
} 


@Entity()
export class Plataforma extends BaseEntity {
  @PrimaryGeneratedColumn()
  idplataforma: number;

  @Column({ nullable: false})
  nome: string;

  @Column({ nullable: true})
  urlimagem: string;

  @Column({ nullable:true })
  status: statusEnum;
  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

}
