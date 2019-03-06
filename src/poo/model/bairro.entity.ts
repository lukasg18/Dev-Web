import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Municipio } from './municipio.entity';
import { Posto } from './posto.entity';

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

  @OneToMany(type => Posto, posto => posto.bairro)
  posto: Posto[];
}