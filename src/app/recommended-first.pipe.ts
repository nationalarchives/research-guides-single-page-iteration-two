import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({
    name: 'recommendedFirst'
})
export class RecommendedFirstPipe implements PipeTransform {

    transform(allGuides: Guide[], subject) {

        const guides = allGuides.sort(function (a, b) {
            let a_recommended = (a.recommended_for_subject === 'true') ? 0 : 1;
            let b_recommended = (b.recommended_for_subject === 'true') ? 0 : 1;

            return a_recommended - b_recommended;

        });

        return guides;

    }

}


