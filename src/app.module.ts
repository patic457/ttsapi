import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CategoryModule } from './category/category.module';
// import { Team } from './team/entities/team.entity';
// import { TeamModule } from './team/team.module';
// import { Ticket } from './ticket/entities/ticket.entity';
// import { TicketModule } from './ticket/ticket.module';
import { GqlModule } from './gql/gql.module';
import { ConfigModule } from '@nestjs/config';
import { TeamModule } from './team/team.module';
import { Team } from './team/entities/team.entity';

ConfigModule.forRoot({
  envFilePath: '.env',
});

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      port: 3306,
      host: 'iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      username: 'de7p9prkwmh3kquo',
      password: 'j2batag6pvrfimgh',
      database: 'g3uky2wss1pv3jyv',
      entities: [Team],
      synchronize: true,
    }),
    // TicketModule, 
    // CategoryModule, TeamModule, 
    GqlModule,
    TeamModule]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
