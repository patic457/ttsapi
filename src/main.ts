import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

declare const module: any;

async function hotLoad(app) {
  //Hotload
  await app.listen(process.env.APP_PORT);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

function setPrefix(app) {
  //Set Prefix Path api/v1
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
}

function swaggerDocumentBuilder(app) {
  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Soso Ticket Tool API')
    .setDescription('Soso Ticket Tool API Description')
    .setVersion('1.0')
    .addTag('sosotickettool')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setPrefix(app);
  swaggerDocumentBuilder(app);
  hotLoad(app);
}

bootstrap();