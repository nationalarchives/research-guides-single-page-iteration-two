import {Component, OnInit, OnDestroy} from '@angular/core';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {SubjectService} from '../../services/subject.service';
import {GuideService} from '../../services/guide.service';

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.css']
})

export class SubjectsComponent implements OnInit {

    subjects;

    selectedSubject;

    routeSubscriber;

    researchGuides;

    getSubjects(): void {
        this.subjects = this.subjectService.getSubjects();
    }

    getSubject(key): string {
        return this.subjectService.getSubject(key);
    }

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides();
    }

    constructor(private guideService: GuideService, private subjectService: SubjectService, private route: ActivatedRoute, private router: Router) {
        this.getSubjects();
        this.getGuides();
    }

    ngOnInit() {
        this.routeSubscriber = this.route.params.subscribe(params => {
            this.selectedSubject = params['key'];
        });
    }

    ngOnDestroy() {
        this.routeSubscriber.unsubscribe();
    }

}
