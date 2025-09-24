// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { PresentesModule } from './presentes.module'; // Exemplo

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Essencial para fácil acesso em outros módulos!
    }),
    DatabaseModule,
    PresentesModule,
  ],
})
export class AppModule {}
