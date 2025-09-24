import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { PresentesService } from './presentes.service';
import { Presente } from './presentes.entity';

@Controller('presentes')
export class PresentesController {
  constructor(private readonly presentesService: PresentesService) {}

  @Get()
  getPresentes(): Promise<Presente[]> {
    return this.presentesService.getAll();
  }

  @Patch(':id/reservar')
  reservar(
    @Param('id') id: string,
    @Body('nomeReservante') nomeReservante: string,
  ): Promise<Presente[]> {
    return this.presentesService.reservarPresente(+id, nomeReservante);
  }
}
