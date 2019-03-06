import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { MedicamentoPosto } from './medicamento-posto.entity';
import { Atendente } from './atendente.entity';

@Entity()
export class RegistroMedicamento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idregistromedicamento: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable:false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.registroMedicamento, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idatendente"})
  atendente: Atendente;

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.registroMedicamento, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto;
}