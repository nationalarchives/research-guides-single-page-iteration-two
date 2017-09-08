import { Injectable } from '@angular/core';

import { Guide } from './guide';

import { RESEARCH_GUIDES } from './mock-guides';

@Injectable()
export class GuideService {

  getGuides(): Guide[] {
    return RESEARCH_GUIDES;
  }

}
