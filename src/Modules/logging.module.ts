import { Module } from '@nestjs/common';
import { LoggingService } from '../Services/logging.service';

@Module({
    providers: [LoggingService],
    exports: [LoggingService], // Exportez le service pour qu'il soit accessible dans d'autres modules
  })
  export class LoggingModule {}