import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.enableCors({ origin: 'http://localhost:4200', credentials: true });
  await app.listen(3000);
}
bootstrap();
//mongodb nastavak https://youtu.be/ulfU5vY6I78?t=1476
//login https://www.youtube.com/watch?v=5rlsUfQTRzs

//new model https://stackoverflow.com/questions/21142524/mongodb-mongoose-how-to-find-subdocument-in-found-document
