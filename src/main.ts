import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true, // 开启 Payload 转换 Dto instance
      forbidNonWhitelisted: true, // 强制验证 dto 属性正确
      transformOptions: {
        enableImplicitConversion: true, //TODO
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
