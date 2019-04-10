import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Bairro } from './bairro.entity';
import { Pessoa } from './pessoa.entity';

@Entity()
export class Cep extends BaseEntity{
  @PrimaryGeneratedColumn()
  idcep: number;

  @Column({ length: 10 })
  numero: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Bairro, bairro => bairro.cep, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idbairro"})
  bairro: Bairro;

  @OneToMany(type => Pessoa, pessoa => pessoa.cep)
  pessoa:Pessoa;
}