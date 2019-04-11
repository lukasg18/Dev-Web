import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Avaliacao } from './avaliacao.entity';

@Entity()
export class Observacao extends BaseEntity{

  @PrimaryGeneratedColumn()
    idobservacao: number;
  
    @Column({ nullable: false })
    descricao: string;
  

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Avaliacao, avaliacao => avaliacao.observacao, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idlocacao"})
  avaliacao: Avaliacao;
}