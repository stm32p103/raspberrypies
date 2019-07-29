import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CardActivity } from './type';
import { CardActivitySource } from './card-activity-source';

const LENGTH = 10;

@Injectable()
export class CardActivityService {
    latestActivity: CardActivity[] = [];
    constructor( private src: CardActivitySource ) {
        console.log( 'CardActivitySource' );
        this.src.activity$.pipe( 
                tap( act => this.onActivity( act ) ),
                tap( act => console.log( 'act ') ) ).subscribe();
    }

    private updateLatestActivity( act: CardActivity ) {
        let tmp = [ ...this.latestActivity, act ];
        
        let start = Math.max( tmp.length - LENGTH, 0 );
        let end = start + Math.min( tmp.length, LENGTH );
        tmp.slice( start, end );
        
        this.latestActivity = tmp;
    }
    
    private onActivity( act: CardActivity ) {
        this.updateLatestActivity( act );
        console.log( '------------------');
        console.log( this.latestActivity );
    }
    
    getLatestActivity() {
        console.log( this.latestActivity );
        return this.latestActivity;
    }
}

