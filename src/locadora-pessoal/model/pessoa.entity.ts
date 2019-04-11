import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Atendente } from './atendente.entity';
import { Autenticacao } from './autenticacao.entity';
import { Cep } from './cep.entity';
import { Locacao } from './locacao.entity';
import { PessoaJogo } from './pessoa_jogo.entity';
import { CartaoCredito } from './cartao-credito.entity';
import { Contato } from './contato.entity';

export enum SexoEnum {
  Masculino = 0,
  Feminino = 1,
} 

export enum statusEnum {
  ativo = 0,
  inativo = 1,
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

    @Column({ nullable:false })
    status: statusEnum;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Atendente, atendente => atendente.pessoa)
  atendente: Atendente[];

  @OneToMany(type => Locacao, locacao => locacao.pessoa)
  locacao: Locacao[];

  @OneToMany(type => Autenticacao, autenticacao => autenticacao.pessoa)
  autenticacao: Autenticacao[];

  @OneToMany(type => PessoaJogo, pessoajogo => pessoajogo.pessoa)
  pessoajogo: PessoaJogo[];

  @OneToMany(type => Contato, contato => contato.pessoa)
  contato: Contato[];

  @OneToMany(type => CartaoCredito, cartao => cartao.pessoa)
  cartao: CartaoCredito[];

  @ManyToOne(type => Cep, cep => cep.pessoa, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({name: "idcep"})
  cep: Cep;
}