import { Injectable } from '@nestjs/common';
import { Observable, Subject, interval  } from 'rxjs';
import { publish, filter, tap } from 'rxjs/operators';
import { CardActivity } from './type';
/* ----------------------------------------------------------------------------
 *  暫定: nfcpyを使ったモジュールを作る
 *  今はエラーが起きても放っておけば nfcpy が勝手に復帰してくれるらしい。
 *  使っているものはステータスを知ることができないので、累積エラーが何回でNGとか外部でカウントしないといけない。
 * ------------------------------------------------------------------------- */
const NfcpyId = require('node-nfcpy-id').default;

@Injectable()
export class CardActivitySource {
    private activitySubject: Subject<CardActivity> = new Subject();
    private activityObservable: Observable<CardActivity>;
    private nfc; 

    constructor() {
        const nfc = new NfcpyId();
        nfc.on( 'touchstart', ( card ) => this.onTouch( card ) );
        nfc.on( 'touchend',   ( card ) => this.onLeave( card ) );
        nfc.on( 'error',      ( err )  => this.onError( err ) ); 
            
        nfc.start();
        
        this.activityObservable = this.activitySubject.pipe( publish() );
    }

    private onTouch( card: any ) {
        console.log( card );
        this.activitySubject.next( { type: 'touch', timestamp: Date.now(), id: card.id } );
    }

    private onLeave( card: any ) {
        console.log( card );
        this.activitySubject.next( { type: 'leave', timestamp: Date.now(), id: card.id } );
    }
    
    private onError( err: any ) {
        console.log( err );
        this.activitySubject.next( { type: 'error', timestamp: Date.now(), message: err } );
    }

    get activity$(): Observable<CardActivity> { return this.activityObservable };
}

