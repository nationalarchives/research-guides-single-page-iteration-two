import {Component, OnInit} from '@angular/core';

import {GuideService} from '../../services/guide.service';
import {SubjectService} from '../../services/subject.service';
import {KeywordService} from '../../services/keyword.service';
import {MultipleSubjectsService} from '../../services/multiple-subjects.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GuideService, SubjectService, KeywordService, MultipleSubjectsService]
})

export class AppComponent implements OnInit {
    title = 'Research guides';

    constructor() {
    }

    ngOnInit() {
        // This is a rudimentary implementation for prototype purposes only. The actual tests
        // would need to ensure that Angular, not just JS, was available.
        let progressivelyEnhancedContent = document.getElementById('progressively-enhanced');
        progressivelyEnhancedContent.style.display = 'none';
    }

}
