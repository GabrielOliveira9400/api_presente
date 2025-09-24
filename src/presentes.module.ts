import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentesController } from './presentes.controller';
import { PresentesService } from './presentes.service';
import { Presente } from './presentes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presente])],
  controllers: [PresentesController],
  providers: [PresentesService],
})
export class PresentesModule {}
