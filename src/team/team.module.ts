import { Module } from '@nestjs/common';
import { TeamReslover } from './team.reslover';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Team } from "./entities/team.entity";
import { TeamService } from './team.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([Team])
    ],
    providers:[TeamReslover, TeamService]
})
export class TeamModule {
    
}
