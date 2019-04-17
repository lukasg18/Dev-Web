import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Locacao } from './locacao.entity';
import { ModalidadePagamento } from './modalidade-pagamento.entity';

export enum tipoPagamento {
  locacao = 1,
  assinatura = 0,
}

@Entity()
export class Pagamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  idpagamento: number;

  @Column({ nullable: false })
  valor: number;

  @Column({ nullable: false })
  data: Date;

  @Column({ nullable: false })
  tipopagamento: tipoPagamento;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Locacao, locacao => locacao.pagamento, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idlocacao' })
  locacao: Locacao;

  @OneToMany(
    type => ModalidadePagamento,
    modalidadepagamento => modalidadepagamento.pagamento,
  )
  modalidadepagamento: ModalidadePagamento;
}
