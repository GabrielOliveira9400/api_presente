import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presente } from './presentes.entity';

@Injectable()
export class PresentesService {
  constructor(
    @InjectRepository(Presente)
    private readonly presenteRepo: Repository<Presente>,
  ) {}

  getAll(): Promise<Presente[]> {
    console.log('getAll');
    return this.presenteRepo.find();
  }

  async reservarPresente(id: number, nomeReservante: string): Promise<Presente[]> {
    const presente = await this.presenteRepo.findOneBy({ id });

    if (!presente) {
      throw new Error('Presente não encontrado');
    }

    presente.reservado = true;
    presente.nomeReservante = nomeReservante;

    await this.presenteRepo.save(presente);

    return this.presenteRepo.find();
  }
}
