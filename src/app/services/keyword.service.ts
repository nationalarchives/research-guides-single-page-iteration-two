import {Injectable} from '@angular/core';

import {ResearchGuidesFromDOM} from './research-guides-from-dom';

@Injectable()
export class KeywordService {

    research_guides;

    getKeywords(): string[] {
        const keywords = [];

        this.research_guides.forEach((guide) => {
            guide.keywords.forEach((keyword) => {
                if (keywords.indexOf(keyword) === -1) {
                    keywords.push(keyword);
                }
            });
        });

        return keywords.sort();
    }

    getAvailableKeywordStartingLetters(): string[] {

        const availableKeywordStartingLetters = [];

        this.getKeywords().forEach((word) => {
            let letter = word[0];
            if(availableKeywordStartingLetters.indexOf(letter) === -1) {
                availableKeywordStartingLetters.push(letter);
            }
        });

        return availableKeywordStartingLetters.sort();
    }


    constructor() {
        const ALL_GUIDES = new ResearchGuidesFromDOM('.research-guide-links', 'div[class="research-guide"]');
        this.research_guides = ALL_GUIDES.getGuides();
    }
}