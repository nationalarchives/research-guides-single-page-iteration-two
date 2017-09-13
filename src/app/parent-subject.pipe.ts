import { Pipe, PipeTransform } from '@angular/core';

import { Subject } from './subject';

@Pipe({
  name: 'parentSubject'
})
export class ParentSubjectPipe implements PipeTransform {

  transform(allSubjects: Subject[], parentKey) {
    return allSubjects.filter(function (subject) {

      if (parentKey === '') {
        return subject;
      }

      if (subject.parent === parentKey) {
        return subject;
      }
    });
  }

}
