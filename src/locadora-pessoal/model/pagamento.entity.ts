import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Bairro } from './bairro.entity';
import { Pessoa } from './pessoa.entity';
import { Locacao } from './locacao.entity';
import { TipoPagamento } from './tipo-pagamento.entity';

@Entity()
export class Pagamento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idpagamento: number;

  @Column({ nullable: false })
  valor: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Locacao, locacao => locacao.pagamento, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idlocacao"})
  locacao: Locacao;

  @OneToMany(type => TipoPagamento, tipopagamento => tipopagamento.pagamento)
  tipopagamento:TipoPagamento;
}