import { Injectable } from '@angular/core';

import { Subject } from '../subject';

import { ResearchGuidesFromDOM } from './research-guides-from-dom';

@Injectable()
export class SubjectService {

  subjects: Subject[];

  getSubjects(): Subject[] {
    return this.subjects;
  }

  getSubject(key: any): string {
    let subject;

    this.subjects.forEach((i) => {
      if(i.key === key) {
        subject = i.name;
      }
    });

    return subject;
  }

  constructor() {
    const ALL_GUIDES = new ResearchGuidesFromDOM('.research-guide-links', 'div[class="research-guide"]');
    this.subjects = ALL_GUIDES.getSubjects();
  }
}

