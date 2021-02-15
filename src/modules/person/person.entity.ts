import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    surname: string;

    @Column()
    person_id: string;

    @Column()
    birthdate: Date;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    gender: string;

}