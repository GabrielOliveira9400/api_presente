import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentesModule } from './presentes.module';
const { database, host, port, user, password } = process.env;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou mysql/sqlite
      host: host,
      port: +port,
      username: user,
      password: password,
      database: database,
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
