import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Estado } from './estado.entity';
import { Bairro } from './bairro.entity';

@Entity()
export class Municipio extends BaseEntity{
  @PrimaryGeneratedColumn()
  idmunicipio: number;

  @Column({ length: 80 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Estado, estado => estado.municipio, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idestado"})
  estado: Estado;

  @OneToMany(type => Bairro, bairro => bairro.municipio)
  bairro: Bairro[];
}