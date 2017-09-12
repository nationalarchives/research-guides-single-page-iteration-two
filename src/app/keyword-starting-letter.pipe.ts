import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'keywordStartingLetter'
})
export class KeywordStartingLetterPipe implements PipeTransform {

    transform(keywords: any, startingLetter: any): any {
        return keywords.filter(function (keyword) {
            if (keyword[0] === startingLetter.toLowerCase()) {
                return keyword;
            }
        });
    }

}
