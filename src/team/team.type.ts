import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Team')
export class TeamType {
    @Field()
    teamId:number;

    @Field()
    teamTitle:string;

    @Field()
    isActive:boolean;

    @Field()
    teamEmail:string;
}
