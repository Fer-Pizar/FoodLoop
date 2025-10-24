// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { BigIntInterceptor } from './common/interceptors/bigint.interceptor';
import { join } from 'path';
import fastifyStatic from '@fastify/static';       
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: true,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "ngrok-skip-browser-warning", 
  ],
});


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new BigIntInterceptor());
  app.setGlobalPrefix('api');

  // ✅ Servir /uploads en ambos adaptadores
  const uploadsPath = join(process.cwd(), 'uploads');
  const adapterType = app.getHttpAdapter().getType(); // 'fastify' | 'express'

  if (adapterType === 'fastify') {
    // Fastify
    const fastify = app.getHttpAdapter().getInstance();
    await fastify.register(fastifyStatic, {
      root: uploadsPath,
      prefix: '/uploads/', // URL pública: /uploads/...
      decorateReply: false,
    });
  } else {
    // Express
    app.use('/uploads', express.static(uploadsPath));
  }

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT as number, '0.0.0.0');
  console.log(`🚀 API running on http://localhost:${PORT}/api`);
}
bootstrap();
