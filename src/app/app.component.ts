import { Component } from '@angular/core';

import { GuideService } from './guide.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ],
    providers: [ GuideService ]
})

export class AppComponent {
    title = 'Research guides application';
    researchGuides;

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides()
    }

    constructor(private guideService: GuideService) {
        this.getGuides();
    }
}