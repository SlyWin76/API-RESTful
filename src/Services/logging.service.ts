import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { Module } from '@nestjs/common';

@Injectable()
export class LoggingService {
  private readonly logger: winston.Logger;

  constructor() {
    const logDirectory = 'logs';
    require('fs').mkdirSync(logDirectory, { recursive: true });

    const transport = new DailyRotateFile({
      filename: `${logDirectory}/%DATE%.log`,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    });

    this.logger = winston.createLogger({
      transports: [
        transport,
        new winston.transports.Console(),
      ],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    });
  }

  info(message: string): void {
    this.logger.info(message);
  }

  warn(message: string): void {
    this.logger.warn(message);
  }

  error(message: string): void {
    this.logger.error(message);
  }
}

@Module({
  providers: [LoggingService],
  exports: [LoggingService], // Exportez le service pour qu'il soit accessible dans d'autres modules
})
export class LoggingModule {}
