import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Behavior {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('text')
  description: string;

  @Column()
  date: Date;
}
