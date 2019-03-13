import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';


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

}
