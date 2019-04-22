import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Locacao } from './locacao.entity';
import { ModalidadePagamento } from './modalidade-pagamento.entity';
import { Assinatura } from './assinatura.entity';

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

  @ManyToMany(type => Locacao, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'pagamento_locacao',
    joinColumn: {
      name: 'idpagamento',
    },
    inverseJoinColumn: {
      name: 'idlocacao',
    },
  })
  locacao: Locacao[];

  @ManyToMany(type => Assinatura, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinTable({
    name: 'pagamento_assinatura',
    joinColumn: {
      name: 'idpagamento',
    },
    inverseJoinColumn: {
      name: 'idassinatura',
    },
  })
  assinatura: Assinatura[];
 

  @ManyToOne(type => ModalidadePagamento, modalidadepagamento => modalidadepagamento.pagamento, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'idmodalidadepagamento' })
  modalidadepagamento: ModalidadePagamento;

}
