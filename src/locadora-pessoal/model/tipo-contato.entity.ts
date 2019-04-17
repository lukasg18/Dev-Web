import {
  Entity,
  Column,
  OneToMany,
  PrimaryColumn,
  BaseEntity,
} from 'typeorm';
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
