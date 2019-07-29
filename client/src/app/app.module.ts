import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
const COMPONENTS = [
    AppComponent
];

const appRoutes: Routes = [
    { path: '', component: AppComponent },
];


/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const ANGULAR_MODULES = [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule
];

/* PrimeNG UI Modules */
import { FieldsetModule } from 'primeng/fieldset';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {PanelMenuModule} from 'primeng/panelmenu';

const PRIMENG_MODULES = [
    FieldsetModule,
    CheckboxModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    RadioButtonModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    PasswordModule,
    CardModule,
    PanelMenuModule
];

@NgModule( {
    declarations: [ ...COMPONENTS ],
    exports: [ ],
    imports: [
       ...ANGULAR_MODULES,
       ...PRIMENG_MODULES,
    ],
    providers: [ ],
    bootstrap: [ AppComponent ]
} )
export class AppModule { }
