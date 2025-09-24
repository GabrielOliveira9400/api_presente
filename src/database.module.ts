// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService], // Injeta o ConfigService na factory
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('HOST'), // Pega a variável do Render
        port: 5432, // Pega a variável do Render
        username: 'gabriel', // Pega a variável do Render
        password: configService.get<string>('PASSWORD'), // Pega a variável do Render
        database: configService.get<string>('DATABASE'), // Pega a variável do Render
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
