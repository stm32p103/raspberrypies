import { CardActivity } from './type';
import { CardActivitySource } from './card-activity-source';
export declare class CardActivityService {
    private src;
    latestActivity: CardActivity[];
    lastId: string;
    currentId: string;
    constructor(src: CardActivitySource);
    private updateLatestActivity;
    private onActivity;
    getLatestActivity(): CardActivity[];
}
