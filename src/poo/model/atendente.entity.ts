import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { Posto } from './posto.entity';
import { Pessoa } from './pessoa.entity';
import { RegistroMedicamento } from './registro-medicamento.entity';
import { Recebimento } from './recebimento.entity';

@Entity()
export class Atendente extends BaseEntity {
  @PrimaryColumn()
  idpessoa: number;

  @Column({ nullable: false, length: 10, unique: true })
  numeroregistro: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Recebimento, recebimento => recebimento.atendente)
  recebimento: Recebimento[];

  @ManyToOne(type => Posto, posto => posto.atendente, {cascade: true, onDelete: "CASCADE"})
  @JoinColumn({ name: 'idposto' })
  posto: Posto;

  @OneToMany(
    type => RegistroMedicamento,
    registroMedicamento => registroMedicamento.atendente,
  )
  registroMedicamento: RegistroMedicamento[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.atendente, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;
}
