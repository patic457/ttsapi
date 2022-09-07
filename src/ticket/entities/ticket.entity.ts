import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
    name: 'ticket'
    , synchronize: true,
})
export class Ticket {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    ticketId: number;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    ticketTitle: String;

    @ApiProperty()
    @Column({
        type: 'varchar',
        length: 100,
        unique: true
    })
    categoryId: string;

    @ApiProperty()
    @Column()
    isActive: boolean;

    @ApiProperty()
    @Column()
    ticketStatus: string;
}
