import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Municipio } from './municipio.entity';

@Entity()
export class Estado extends BaseEntity{
  @PrimaryGeneratedColumn()
  idestado: number;

  @Column({ length: 30 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Municipio, municipio => municipio.estado)
  municipio: Municipio[];
}