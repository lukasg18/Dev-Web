import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Atendente } from './atendente.entity';
import { Autenticacao } from './autenticacao.entity';
import { Cep } from './cep.entity';

export enum SexoEnum {
  Masculino = 0,
  Feminino = 1,
} 

@Entity()
export class Pessoa extends BaseEntity{

  @PrimaryGeneratedColumn()
    idpessoa: number;
  
    @Column({ length: 100 })
    nome: string;

    @Column({ length: 100 })
    nomeusuario: string;
  
    @Column({ nullable:false })
    datanascimento: Date;
  
    @Column({ nullable:false, length:12, unique:true })
    cpf: string;

    @Column({ nullable:false })
    sexo: SexoEnum;

    @Column({ nullable:false })
    pontuacao: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Atendente, atendente => atendente.pessoa)
  atendente: Atendente[];

  @OneToMany(type => Autenticacao, autenticacao => autenticacao.pessoa)
  autenticacao: Autenticacao[];

  @ManyToOne(type => Cep, cep => cep.pessoa, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idcep"})
  cep: Cep;
}