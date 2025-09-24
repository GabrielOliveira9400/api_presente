// src/app.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private configService: ConfigService) {}

  // Este método roda assim que o módulo é inicializado
  onModuleInit() {
    console.log('--- INICIANDO VERIFICAÇÃO DE VARIÁVEIS DE AMBIENTE ---');

    // 1. Pegue uma variável específica
    const dbHost = this.configService.get<string>('DATABASE_HOST');
    console.log('DATABASE_HOST:', dbHost);

    // 2. Tente pegar uma variável que talvez não exista
    const nonExistentVar = this.configService.get<string>('VARIAVEL_FANTASMA');
    console.log('VARIAVEL_FANTASMA:', nonExistentVar); // Deverá mostrar 'undefined'

    // 3. Verifique o tipo
    const port = this.configService.get<number>('PORT');
    console.log('PORT:', port, '| Tipo:', typeof port); // Verifique se o tipo é 'number'

    console.log('--- FIM DA VERIFICAÇÃO ---');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
