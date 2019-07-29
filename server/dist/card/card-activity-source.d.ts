import { Observable } from 'rxjs';
import { CardActivity } from './type';
export declare class CardActivitySource {
    private activitySubject;
    private activityObservable;
    private nfc;
    constructor();
    private onTouch;
    private onLeave;
    private onError;
    readonly activity$: Observable<CardActivity>;
}
