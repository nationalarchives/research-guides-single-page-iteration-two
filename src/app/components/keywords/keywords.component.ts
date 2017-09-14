import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {GuideService} from '../../services/guide.service';
import {KeywordService} from '../../services/keyword.service';

import {AToZItem} from '../../aToZItem';

@Component({
    selector: 'app-keywords',
    templateUrl: './keywords.component.html',
    styleUrls: ['./keywords.component.css']
})

export class KeywordsComponent implements OnInit {

    researchGuides;
    keywords;
    aToZ = [];
    selectedKeywordStartingLetter;
    selectedKeyword;
    routeSubscriber;

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides();
    }

    getKeywords(): void {
        this.keywords = this.keywordService.getKeywords();
    }

    setAToZ(): void {
        let availableKeywords = this.keywordService.getAvailableKeywordStartingLetters();
        'abcdefghijklmnopqrstuvwxyz'.split('').forEach((i) => {

            let item = new AToZItem();
            item.available = (availableKeywords.indexOf(i) === -1) ? false : true;
            item.letter = i;

            this.aToZ.push(item);

        });
    }

    constructor(private guideService: GuideService, private keywordService: KeywordService, private route: ActivatedRoute, private router: Router) {
        this.getGuides();
        this.getKeywords();
        this.setAToZ();
    }

    ngOnInit() {
        this.routeSubscriber = this.route.params.subscribe(params => {
            this.selectedKeywordStartingLetter = params['startingLetter'];
            this.selectedKeyword = params['keyword'];
        });
    }

    ngOnDestroy() {
        this.routeSubscriber.unsubscribe();
    }

}
