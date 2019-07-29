export declare type CardActivity = CardTouchActivity | CardLeaveActivity | CardErrorActivity;
export interface CardActivityCommon {
    type: string;
    timestamp: number;
}
export interface CardTouchActivity extends CardActivityCommon {
    type: 'touch';
    id: string;
}
export interface CardLeaveActivity extends CardActivityCommon {
    type: 'leave';
}
export interface CardErrorActivity extends CardActivityCommon {
    type: 'error';
    message: string;
}
