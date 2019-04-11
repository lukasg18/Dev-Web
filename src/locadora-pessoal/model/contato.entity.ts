import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoContato } from './tipo-contato.entity';


@Entity()
export class Contato extends BaseEntity {
  @PrimaryColumn()
  idcontato: number;

  @Column({ nullable: false })
  descricao: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => TipoContato, tipocontato => tipocontato.contato, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idtipocontato' })
  tipocontato: TipoContato;

  @ManyToOne(type => Pessoa, pessoa => pessoa.contato, {
    eager: true, cascade: true, onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'idpessoa' })
  pessoa: Pessoa;
}
