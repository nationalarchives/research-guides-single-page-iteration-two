import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {GuideDetailsComponent} from "./components/guide-details/guide-details.component";

@NgModule({
    declarations: [
        AppComponent,
        GuideDetailsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
