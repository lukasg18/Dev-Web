import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
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

  @OneToMany(type => Atendente, atendente => atendente.pessoa)
  atendente: Atendente[];
}