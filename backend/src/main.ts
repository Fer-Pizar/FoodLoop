import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true, 
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            
      forbidNonWhitelisted: true, 
      transform: true,            
    }),
  );

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT, '0.0.0.0');
  console.log(`🚀 API running on http://0.0.0.0:${PORT}`);
}
bootstrap();
