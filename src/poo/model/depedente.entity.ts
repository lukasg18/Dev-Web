import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, PrimaryColumn, BaseEntity } from 'typeorm';
import { Titular } from './titular.entity';
import { Recebimento } from './recebimento.entity';
import { Pessoa } from './pessoa.entity';

@Entity('dependente')
export class Depedente extends BaseEntity{
  @PrimaryColumn()
  idpessoa:number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Titular, titular => titular.depedente, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idtitular"})
  titular: Titular;

  @ManyToOne(type => Pessoa, pessoa => pessoa.depedente, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;

}