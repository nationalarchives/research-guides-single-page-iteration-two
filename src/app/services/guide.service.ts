import {Injectable} from '@angular/core';

import {Guide} from '../guide';

import {ResearchGuidesFromDOM} from './research-guides-from-dom';

@Injectable()
export class GuideService {

    getGuides(): Guide[] {
        const ALL_GUIDES = new ResearchGuidesFromDOM('.research-guide-links', 'li[class="research-guide"]');
        return ALL_GUIDES.getGuides();
    }

}