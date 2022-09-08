import { Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

export class CreateTeamDto {

    @IsNotEmpty({ message: 'Team Not Empty' })
    @Field()
    teamTitle: string

    @IsNotEmpty({ message: 'Team Not Empty' })
    @Field()
    teamEmail: string

}
