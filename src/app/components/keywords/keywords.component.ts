import {Component, OnInit} from '@angular/core';

import {GuideService} from './../../services/guide.service';

import {AvailableKeywordStartingLetters} from './../../available-keyword-starting-letters';

@Component({
    selector: 'app-keywords',
    templateUrl: './keywords.component.html',
    styleUrls: ['./keywords.component.css']
})
export class KeywordsComponent implements OnInit {

    researchGuides;
    keywords;
    keywordStartingLetterAvailability;
    currentlySelectedStartingLetter;
    currentlySelectedKeyword;

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides();
    }

    setKeywords(): void {

        const allKeywords = [];

        this.researchGuides.forEach((guide) => {
            guide.keywords.forEach((keyword) => {
                if (allKeywords.indexOf(keyword) === -1) {
                    allKeywords.push(keyword);
                }
            });
        });

        this.keywords = allKeywords.sort();
    }

    setKeywordStartingLetterAvailability(): void {
        const letters = '1abcdefghijklmnopqrstuvwxyz'.split('');

        const startingLetters: AvailableKeywordStartingLetters[] = [];

        letters.forEach((letter) => {
            const startingLetter = new AvailableKeywordStartingLetters();
            startingLetter.letter = letter;
            startingLetter.available = false;
            this.keywords.forEach((i) => {
                if (startingLetter.letter === i[0]) {
                    startingLetter.available = true;
                }
            });
            startingLetters.push(startingLetter);
        });

        this.keywordStartingLetterAvailability = startingLetters;
    }

    bootstrapAStartingLetter(): void {
        this.currentlySelectedStartingLetter = this.keywords[0][0];
    }

    selectStartingLetter(event): void {
        event.preventDefault();
        this.currentlySelectedStartingLetter = event.target.innerText;
        this.currentlySelectedKeyword = undefined;
    }

    setSelectedKeyword(event): void {
        event.preventDefault();
        this.currentlySelectedKeyword = event.target.innerText;
    }

    constructor(private guideService: GuideService) {
        this.getGuides();
        this.setKeywords();
        this.setKeywordStartingLetterAvailability();
        this.bootstrapAStartingLetter();
    }

    ngOnInit() {
    }

}
