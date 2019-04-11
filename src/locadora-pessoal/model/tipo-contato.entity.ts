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
import { Contato } from './contato.entity';


@Entity()
export class TipoContato extends BaseEntity {
  @PrimaryColumn()
  idcontato: number;

  @Column({ nullable: false})
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Contato, contato => contato.tipocontato)
  contato: Contato;
}
