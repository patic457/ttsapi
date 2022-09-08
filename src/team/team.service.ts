import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
    constructor(){
        @InjectRepository(Team) private teamRepository: Repository<Team>
    }

    async Create(){

    }

    async findAll(){

    }

}
