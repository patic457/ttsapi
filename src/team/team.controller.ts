import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller({
  version: '1',
  path: 'team'
})
export class TeamController {
  constructor(private readonly teamService: TeamService) { }

  @Post()
  findAll() {
    return this.teamService.findAll();
  }

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }


  @Post('create')
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Post('remove/:id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }


}
