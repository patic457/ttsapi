import { Module } from '@nestjs/common';
import { ApolloDriver,ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TeamModule } from 'src/team/team.module';

@Module({
    imports:[
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        TeamModule
    ],
})
export class GqlModule {}
