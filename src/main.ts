import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggingService } from './Services/logging.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggingService = app.get(LoggingService)

  // Configuration de Swagger
  const options = new DocumentBuilder()
    .setTitle('Votre API')
    .setDescription('Description de votre API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Utilisation du pipe de validation global
  app.useGlobalPipes(new ValidationPipe());

  // Exemple d'utilisation du service de logging dans l'application principale
  loggingService.info('Application démarrée');

  // Démarrage du serveur
  await app.listen(3000);
}

bootstrap();
