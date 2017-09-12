import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app/app.component';
import {GuidesComponent} from './components/guides/guides.component';
import {GuideDetailsComponent} from './components/guide-details/guide-details.component';
import {NameSearchComponent} from './components/name-search/name-search.component';

import {GuideService} from './services/guide.service';

import {NameSearchPipe} from './name-search.pipe';
import { NameSearchNumberFoundPipe } from './name-search-number-found.pipe';

const routes: Routes = [
    {path: 'guides', component: GuidesComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        GuidesComponent,
        GuideDetailsComponent,
        NameSearchComponent,
        NameSearchPipe,
        NameSearchNumberFoundPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [GuideService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
