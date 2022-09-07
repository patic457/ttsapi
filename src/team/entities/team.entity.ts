import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'team'
    ,synchronize: true,
})
export class Team {

    @PrimaryGeneratedColumn()
    teamId: number;

    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    teamTitle: String;

    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    teamEmail: string;

    @Column()
    isActive: boolean;

}

