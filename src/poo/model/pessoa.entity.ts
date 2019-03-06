import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Titular } from './titular.entity';
import { Recebimento } from './recebimento.entity';
import { Depedente } from './depedente.entity';
import { Atendente } from './atendente.entity';

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
  
    @Column({ nullable:false })
    datanascimento: Date;
  
    @Column({ nullable:false, length:12, unique:true })
    cpf: string;

    @Column({ nullable:false })
    sexo: SexoEnum;

    @Column({ nullable:false, length: 10, unique:true })
    rg: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Recebimento, recebimento => recebimento.pessoa)
  recebimento: Recebimento[];

  @OneToMany(type => Titular, titular => titular.pessoa)
  titular: Titular[];

  @OneToMany(type => Depedente, depedente => depedente.pessoa)
  depedente: Depedente[];

  @OneToMany(type => Atendente, atendente => atendente.pessoa)
  atendente: Atendente[];
}