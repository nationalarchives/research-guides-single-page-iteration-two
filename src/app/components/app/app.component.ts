import {Component} from '@angular/core';

import {GuideService} from '../../services/guide.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GuideService]
})

export class AppComponent {
    title = 'Research guides application';
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