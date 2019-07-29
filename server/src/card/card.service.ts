import { Injectable } from '@nestjs/common';
import { Observable, Subject, timer } from 'rxjs';
import { tap, filter, debounce } from 'rxjs/operators';
import { CardActivity, CardTouchActivity } from './type';
import { CardActivitySource } from './card-activity-source';

const LENGTH = 10;

// デバウンスは適当。数が減らせればよいが、根本解決ではない。区別がつかないから。

@Injectable()
export class CardActivityService {
    latestActivity: CardActivity[] = [];
    lastId: string = '';
    currentId: string = '';

    constructor( private src: CardActivitySource ) {
        this.src.activity$.pipe(
                filter( act => act.type === 'touch' ),
                debounce( ( act: CardTouchActivity ) => {
                    let obs: Observable<number>; 
                    this.lastId = this.currentId;
                    this.currentId = act.id;
                    if( this.lastId == this.currentId ) {
                        console.log( 'same' );
                        obs = timer( 5000 );
                    } else {
                        console.log( 'different' );
                        obs = timer( 500 );
                    }
                    return obs;
                } ) ).subscribe( act => this.onActivity( act ) );
    }

    private updateLatestActivity( act: CardActivity ) {
        let tmp = [ ...this.latestActivity, act ];
        
        let start = Math.max( tmp.length - LENGTH, 0 );
        let end = start + Math.min( tmp.length, LENGTH );
        
//        console.log( '[  ' + start + ' - ' + end + ' ]' )
        
        this.latestActivity = tmp.slice( start, end );
    }
    
    private onActivity( act: CardActivity ) {
        this.updateLatestActivity( act );
//        console.log( '------------------');
//        console.log( this.latestActivity );
    }
    
    getLatestActivity() {
//        console.log( this.latestActivity );
        return this.latestActivity;
    }
}

