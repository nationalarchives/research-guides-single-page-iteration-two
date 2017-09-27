import { Pipe, PipeTransform } from '@angular/core';

import { Subject } from './subject';

@Pipe({
  name: 'noParents'
})
export class NoParentsPipe implements PipeTransform {

  transform(allSubjects: Subject[]) {
    return allSubjects.filter(function (subject) {

      if (!!subject.parent) {
        return subject;
      }

    });
  }

}
