import {Pipe, PipeTransform} from '@angular/core';

import {Guide} from './guide';

@Pipe({
    name: 'guidesForSubject'
})
export class GuidesForSubjectPipe implements PipeTransform {

    transform(allGuides: Guide[], subject) {

        const guides = allGuides.filter(function (guide) {

            if (subject === undefined) {
                return guide;
            }

            if (guide.subjects.indexOf(subject) !== -1) {
                return guide;
            }
        });

        return guides;

    }


}
