import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class Laboratorio extends BaseEntity{
  @PrimaryGeneratedColumn()
  idlaboratorio: number;

  @Column({ length: 30 })
  nome: string;

}