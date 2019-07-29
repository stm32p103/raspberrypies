import { CardActivity } from './type';
import { CardActivitySource } from './card-activity-source';
export declare class CardActivityService {
    private src;
    latestActivity: CardActivity[];
    constructor(src: CardActivitySource);
    private updateLatestActivity;
    private onActivity;
    getLatestActivity(): CardActivity[];
}
