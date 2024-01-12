import { Injectable } from '@nestjs/common';
import { LoggingService } from './Services/logging.service'; 

@Injectable()
export class AppService {
  constructor(private readonly loggingService: LoggingService) {} // Injectez le service de logging dans le constructeur

  getHello(): string {
    this.loggingService.info('AppService - getHello method called'); // Exemple d'utilisation du service de logging
    return 'Hello World!';
  }
}