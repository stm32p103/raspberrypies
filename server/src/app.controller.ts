import { Controller, Get } from '@nestjs/common';
import { CardActivityService, CardActivity } from './card';

@Controller()
export class AppController {
    constructor(private readonly card: CardActivityService) {}
    
    @Get()
    root(): CardActivity[] {
        return this.card.getLatestActivity();
    }
}
