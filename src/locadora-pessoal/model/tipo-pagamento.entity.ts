import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Bairro } from './bairro.entity';
import { Pessoa } from './pessoa.entity';
import { Pagamento } from './pagamento.entity';

@Entity()
export class TipoPagamento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idtipopagamento: number;

  @Column({ nullable: false })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Pagamento, pagamento => pagamento.tipopagamento, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idpagamento"})
  pagamento: Pagamento;
}