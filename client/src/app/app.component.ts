import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardActivity } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    activities: CardActivity[] = [];
    readonly activityColumns = [ 'timestamp', 'event' ];
    
    constructor( private http: HttpClient ) {
    }
    async update() {
        const result = await this.http.get( '/card' ).toPromise() ;
        if( result ) {
            this.activities = result as CardActivity[];
        }
    }
    
    onSelect( event ) {
        console.log( event );
    }
}
