import { Controller, Get } from '@nestjs/common';
import { CardActivityService, CardActivity } from './card';

@Controller( 'card' )
export class AppController {
    constructor( private readonly card: CardActivityService ) {}
    
    @Get()
    getActivity(): CardActivity[] {
        return this.card.getLatestActivity();
    }
}
