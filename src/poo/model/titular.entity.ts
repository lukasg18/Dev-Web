import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, PrimaryColumn, BaseEntity, EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Solicitacao } from './solicitacao.entity';
import { Depedente } from './depedente.entity';

@Entity()
export class Titular extends BaseEntity{
  @PrimaryColumn()
  idpessoa:number;

  @Column({ nullable:false })
  numerosus: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Depedente, depedente => depedente.titular, { eager:true })
  depedente: Depedente[];

  @OneToMany(type => Solicitacao, solicitacao => solicitacao.titular  )
  solicitacao: Solicitacao[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.titular, {eager:true, cascade: true, onDelete: "CASCADE"})
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}