import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({
    name: 'guidesWithKeyword'
})
export class GuidesWithKeywordPipe implements PipeTransform {

    transform(allGuides: Guide[], keyword): any {
        return allGuides.filter(function (guide) {

            if (keyword === undefined) {
                return guide;
            }

            const keywordAsKey = keyword.split(' ').join('-');

            if (guide.keywords.indexOf(keywordAsKey) !== -1) {
                return guide;
            }
        });
    }

}
