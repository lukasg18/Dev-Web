import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Locacao } from './locacao.entity';
import { Observacao } from './observcao.entity';

@Entity()
export class Avaliacao extends BaseEntity{

  @PrimaryGeneratedColumn()
    idavaliacao: number;
  
    @Column({ nullable: false })
    nota: number;
  

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Locacao, locacao => locacao.avaliacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idlocacao"})
  locacao: Locacao;

  @OneToMany(type => Observacao, observacao => observacao.avaliacao)
  observacao: Observacao
}