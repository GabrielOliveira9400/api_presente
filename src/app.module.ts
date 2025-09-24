import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentesModule } from './presentes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou mysql/sqlite
/*      host: 'dpg-d39k7gndiees73f4v230-a.oregon-postgres.render.com',
      port: 5432,
      username: 'gabriel',
      password: 'sXxmlwZ1JIit8VQJIGa8dfp9dkGE2m7u',
      database: 'chadepanela_vo4l',*/
      autoLoadEntities: true,
      synchronize: true, // ⚠️ apenas em dev
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    PresentesModule,
  ],
})
export class AppModule {}
