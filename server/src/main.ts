import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useStaticAssets(join(__dirname, '..', 'client'));
    await app.listen(3000);
}
bootstrap();
