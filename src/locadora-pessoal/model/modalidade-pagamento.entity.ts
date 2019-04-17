import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  BaseEntity,
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

  @ManyToOne(type => Pagamento, pagamento => pagamento.modalidadepagamento, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idpagamento' })
  pagamento: Pagamento;
}
