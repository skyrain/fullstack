import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PersonFormComponent } from './person-form.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        PersonFormComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
