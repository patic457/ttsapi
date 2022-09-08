import { Query } from "@nestjs/graphql";
import { TeamType } from "./team.type";

export class TeamReslover {
    constructor() {

    }

    @Query(() => [TeamType])
    team() {
        return [{ teamId: 1, teamTitle: 'soso', teamEmail: 'p@p.com', isActive:1 }];
    }

    createTeam() {

    }


}
