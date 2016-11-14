import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PersonFormComponent } from './person-form.component';

//restful service
// config
import { HttpModule } from '@angular/http';
// add rxjs operator to enchance Observable implementation
import './rxjs-extensions';
// custom service
import {PersonService} from './person.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        PersonFormComponent
    ],
    providers: [
        PersonService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

