import {Component, Input} from '@angular/core';
import {Guide} from '../../guide';

@Component({
    selector: 'app-guide-detail',
    templateUrl: './guide-details.component.html',
    styleUrls: ['./guide-details.component.css']
})

export class GuideDetailsComponent {
    @Input() guide: Guide;
    @Input() selectedSubject: string;

    recommendedForCurrentSubject(subject_one: string, subject_two: string): boolean {
        return (subject_one === subject_two);
    }
}