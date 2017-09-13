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
import { KeywordsComponent } from './components/keywords/keywords.component';
import { KeywordStartingLetterPipe } from './keyword-starting-letter.pipe';
import { GuidesWithKeywordPipe } from './guides-with-keyword.pipe';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ParentSubjectPipe } from './parent-subject.pipe';
import { NoParentsPipe } from './no-parents.pipe';
import { GuidesForSubjectPipe } from './guides-for-subject.pipe';

const routes: Routes = [
    {path: '', component: GuidesComponent},
    {path: 'keywords', component: KeywordsComponent},
    {path: 'subjects', component: SubjectsComponent},
    {path: 'subjects/:key', component: SubjectsComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        GuidesComponent,
        GuideDetailsComponent,
        NameSearchComponent,
        NameSearchPipe,
        NameSearchNumberFoundPipe,
        KeywordsComponent,
        KeywordStartingLetterPipe,
        GuidesWithKeywordPipe,
        SubjectsComponent,
        ParentSubjectPipe,
        NoParentsPipe,
        GuidesForSubjectPipe
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
