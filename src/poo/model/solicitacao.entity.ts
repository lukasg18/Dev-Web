import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { Titular } from './titular.entity';
import { Medicamento } from './medicamento.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';


export enum EstadoSolicitacaoEnum {
  Comunicado = 0,
  Atendido = 1,
  Expirado = 2
} 

@Entity()
export class Solicitacao extends BaseEntity{
  @PrimaryGeneratedColumn()
  idsolicitacao: number;

  @Column({ nullable:false })
  data_hora: Date;

  @Column({ nullable:false })
  quantidademedicamento: number;

  @Column({ nullable:false })
  estadosolicitacao: EstadoSolicitacaoEnum;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################
  

  @ManyToOne(type => Titular, titular => titular.solicitacao, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idtitular"})   
  titular: Titular

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.solicitacao, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idmedicamentoposto"})   
  medicamentoPosto: MedicamentoPosto;

}