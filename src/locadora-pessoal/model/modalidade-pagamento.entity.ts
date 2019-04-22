import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Pagamento } from './pagamento.entity';

@Entity()
export class ModalidadePagamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  idmodalidadepagamento: number;

  @Column({ nullable: false })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(
    type => Pagamento,
    pagamento => pagamento.modalidadepagamento,
  )
  pagamento: Pagamento[];
}
