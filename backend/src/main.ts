import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
//mongodb nastavak https://youtu.be/ulfU5vY6I78?t=1476
//login https://www.youtube.com/watch?v=5rlsUfQTRzs