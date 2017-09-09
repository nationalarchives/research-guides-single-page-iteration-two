import {Component} from '@angular/core';

import {GuideService} from './../../services/guide.service';

@Component({
    selector: 'app-guides',
    templateUrl: './guides.component.html',
    styleUrls: ['./guides.component.css'],
})

export class GuidesComponent {
    researchGuides;
    nameSearch = '';

    onSearchStringUpdate(searchString: string) {
        console.log('The observed string is : ' + searchString);
        this.nameSearch = searchString;
    }

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides();
    }

    constructor(private guideService: GuideService) {
        this.getGuides();
    }
}