import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Atendente } from './atendente.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';

@Entity()
export class Recebimento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idrecebimento: number;

  @Column({ nullable: false })
  quantidademedicamentos: number;

  @Column({ nullable: false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @ManyToOne(type => Pessoa, pessoa => pessoa.recebimento, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;

  @ManyToOne(type => Atendente, atendente => atendente.recebimento, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idatendente"})
  atendente: Atendente;

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.recebimento, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto;
}