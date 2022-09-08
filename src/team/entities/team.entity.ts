import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    teamId: number

    @Column()
    teamTitle: string

    @Column()
    isActive: boolean

    @Column()
    teamEmail: string

}