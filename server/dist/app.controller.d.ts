import { CardActivityService, CardActivity } from './card';
export declare class AppController {
    private readonly card;
    constructor(card: CardActivityService);
    root(): CardActivity[];
}
