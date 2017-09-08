import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './components/app/app.component';
import {GuideDetailsComponent} from './components/guide-details/guide-details.component';
import {NameSearchComponent} from './components/name-search/name-search.component';
import { NameSearchPipe } from './name-search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        GuideDetailsComponent,
        NameSearchComponent,
        NameSearchPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
