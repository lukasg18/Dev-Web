import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Posto } from './posto.entity';
import { Medicamento } from './medicamento.entity';
import { RegistroMedicamento } from './registro-medicamento.entity';
import { Recebimento } from './recebimento.entity';
import { Solicitacao } from './solicitacao.entity';

export enum EstadoMedicamentoEnum {
  Indisponivel = 0,
  Disponivel = 1,
} 

@Entity()
export class MedicamentoPosto extends BaseEntity{
  @PrimaryGeneratedColumn()
  idmedicamentoposto: number;

  @Column({ nullable: false })
  estadomedicamento: EstadoMedicamentoEnum;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable: false })
  datavencimento: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Posto, posto => posto.medicamentoPosto, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({ name: 'idposto' })
  posto: Posto;

  @ManyToOne(type => Medicamento, medicamento => medicamento.medicamentoPosto, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({ name: 'idmedicamento' })
  medicamento: Medicamento;

  @OneToMany(type => RegistroMedicamento, registroMedicamento => registroMedicamento.medicamentoPosto)
  registroMedicamento: RegistroMedicamento[];

  @OneToMany(type => Recebimento, recebimento => recebimento.medicamentoPosto)
  recebimento: Recebimento[];

  @OneToMany(type => Solicitacao, solicitacao => solicitacao.medicamentoPosto)
  solicitacao: Solicitacao[];
}
