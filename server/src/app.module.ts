import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardActivityService, CardActivitySource } from './card';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, CardActivityService, CardActivitySource],
})
export class AppModule {}
