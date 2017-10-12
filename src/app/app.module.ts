import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { GuidesComponent } from './components/guides/guides.component';
import { GuideDetailsComponent } from './components/guide-details/guide-details.component';
import { NameSearchComponent } from './components/name-search/name-search.component';

import { NameSearchPipe } from './name-search.pipe';
import { NameSearchNumberFoundPipe } from './name-search-number-found.pipe';
import { KeywordsComponent } from './components/keywords/keywords.component';
import { KeywordStartingLetterPipe } from './keyword-starting-letter.pipe';
import { GuidesWithKeywordPipe } from './guides-with-keyword.pipe';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { ParentSubjectPipe } from './parent-subject.pipe';
import { NoParentsPipe } from './no-parents.pipe';
import { GuidesForSubjectPipe } from './guides-for-subject.pipe';
import { RecommendedFirstPipe } from './recommended-first.pipe';
import { MultipleSubjectsComponent } from './components/multiple-subjects/multiple-subjects.component';
import { SelectedCategoriesPipe } from './selected-categories.pipe';

const routes: Routes = [
    { path: '', component: GuidesComponent },
    { path: 'keywords', component: KeywordsComponent },
    { path: 'keywords/:startingLetter', component: KeywordsComponent },
    { path: 'keywords/:startingLetter/:keyword', component: KeywordsComponent },
    { path: 'subject', component: SubjectsComponent },
    { path: 'subject/:key', component: SubjectsComponent },
    { path: 'multiple-subjects', component: MultipleSubjectsComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        GuidesComponent,
        GuideDetailsComponent,
        NameSearchComponent,
        NameSearchPipe,
        NameSearchNumberFoundPipe,
        KeywordStartingLetterPipe,
        GuidesWithKeywordPipe,
        SubjectsComponent,
        ParentSubjectPipe,
        NoParentsPipe,
        GuidesForSubjectPipe,
        KeywordsComponent,
        RecommendedFirstPipe,
        MultipleSubjectsComponent,
        SelectedCategoriesPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
