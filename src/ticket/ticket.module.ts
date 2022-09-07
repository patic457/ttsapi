import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketResolver } from './ticket.resolver';
import { TicketController } from './ticket.controller';

@Module({
  providers: [TicketResolver, TicketService],
  controllers: [TicketController]
})
export class TicketModule {}
