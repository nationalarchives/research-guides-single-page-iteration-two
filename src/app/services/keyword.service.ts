import {Injectable} from '@angular/core';

import {RESEARCH_GUIDES} from './mock-guides';

@Injectable()
export class KeywordService {

    getKeywords(): string[] {
        let keywords = [];

        RESEARCH_GUIDES.forEach((guide) => {
            guide.keywords.forEach((keyword) => {
                if (keywords.indexOf(keyword) === -1) {
                    keywords.push(keyword);
                }
            });
        });

        return keywords.sort();
    }

    getAvailableKeywordStartingLetters(): string[] {

        let availableKeywordStartingLetters = [];

        this.getKeywords().forEach((word) => {
            let letter = word[0];
            if(availableKeywordStartingLetters.indexOf(letter) === -1) {
                availableKeywordStartingLetters.push(letter);
            }
        });

        return availableKeywordStartingLetters.sort();
    }
}