import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum statusEnum {
  ativo = 0,
  inativo = 1,
} 


@Entity()
export class Genero extends BaseEntity {
  @PrimaryGeneratedColumn()
  idgenero: number;

  @Column({ nullable: false})
  nome: string;

  @Column({ nullable:true })
  status: statusEnum;
  
  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

}
