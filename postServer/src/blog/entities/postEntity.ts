import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 5000})
    title: string;

    @Column({length: 5000})
    subTitle: string;

    @Column()
    userId: number;
    
    @Column('text')
    content: string
}
