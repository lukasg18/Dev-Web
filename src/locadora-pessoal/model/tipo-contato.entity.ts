import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contato } from './contato.entity';


@Entity()
export class TipoContato extends BaseEntity {
  @PrimaryGeneratedColumn()
  idtipocontato: number;

  @Column({ nullable: false})
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Contato, contato => contato.tipocontato)
  contato: Contato;
}
