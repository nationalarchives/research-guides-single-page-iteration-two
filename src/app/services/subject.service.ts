import { Injectable } from '@angular/core';

import { Subject } from '../subject';

import { SUBJECTS } from './mock-subjects';

@Injectable()
export class SubjectService {

  getSubjects(): Subject[] {
    return SUBJECTS;
  }

  getSubject(key: any): string {
    let subject;

    SUBJECTS.forEach((i) => {
      if(i.key === key) {
        subject = i.name;
      }
    });

    return subject;
  }

}

