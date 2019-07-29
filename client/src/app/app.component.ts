import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CardTouchActivity } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    activities: CardTouchActivity[] = [];
    
    constructor( private http: HttpClient ) {
    }
    async update() {
        const result = await this.http.get( '/card' ).toPromise() ;
        if( result ) {
            this.activities = result as CardTouchActivity[];
        }
    }
    
    onSelect( event ) {
        console.log( event );
    }
}
