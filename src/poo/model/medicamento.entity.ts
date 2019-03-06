import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Laboratorio } from './laboratorio.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';
import { Solicitacao } from './solicitacao.entity';

@Entity()
export class Medicamento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idmedicamento: number;

  @Column({ length: 80 })
  nome: string;

  @Column({ length: 200 })
  bula: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToMany(type => Laboratorio, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'medicamento_laboratorio',
    joinColumn: {
      name: 'idmedicamento',
    },
    inverseJoinColumn: {
      name: 'idlaboratorio',
    },
  })
  laboratorio: Laboratorio[];

  @OneToMany(
    type => MedicamentoPosto,
    medicamentoPosto => medicamentoPosto.medicamento,
  )
  medicamentoPosto: MedicamentoPosto[];

}
