import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Municipio } from './municipio.entity';
import { Cep } from './cep.entity';

@Entity()
export class Bairro extends BaseEntity{
  @PrimaryGeneratedColumn()
  idbairro: number;

  @Column({ length: 30 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Municipio, municipio => municipio.bairro, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idmunicipio"})
  municipio: Municipio;

  @OneToMany(type => Cep, cep => cep.bairro)
  cep:Cep[];
}