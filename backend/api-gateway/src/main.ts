import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  console.log('Start NestJS');
  const app = await NestFactory.create(AppModule);
  console.log('Nest instanced');

  // CORS configuration
  app.enableCors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    credentials: false,
    origin: '*'
  });
  console.log('CORS configured');

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  // Swagger configuration
  const options = new DocumentBuilder()
    .setTitle('Recipes Social Network API')
    .setDescription('API to connect with the recipes social network app')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true
    }
  });

  console.log('URL configured');

  // App listen port
  await app.listen(process.env.PORT || 3000);
  console.log('PORT configured');
}
bootstrap();
