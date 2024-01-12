import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingModule } from './Modules/logging.module';

@Module({
  imports: [LoggingModule, /* ... autres imports ... */],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
