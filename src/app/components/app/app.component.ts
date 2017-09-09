import {Component, OnInit} from '@angular/core';

import {GuideService} from '../../services/guide.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [GuideService]
})

export class AppComponent implements OnInit {
    title = 'Research guides application';

    constructor() {
    }

    ngOnInit() {
    }

}
