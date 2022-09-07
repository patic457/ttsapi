import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { Team } from './team/entities/team.entity';
import { TeamModule } from './team/team.module';
import { Ticket } from './ticket/entities/ticket.entity';
import { TicketModule } from './ticket/ticket.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'de7p9prkwmh3kquo',
      password: 'j2batag6pvrfimgh',
      database: 'g3uky2wss1pv3jyv',
      entities: [Team,Ticket],
      synchronize: true,
    }),
    TicketModule, CategoryModule, TeamModule]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
