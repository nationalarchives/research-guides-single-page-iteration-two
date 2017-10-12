import { Injectable } from '@angular/core';

import { Category } from '../category';
import { ResearchGuidesFromDOM } from "./research-guides-from-dom";

@Injectable()
export class MultipleSubjectsService {

    categories: Category[];

    getCategories() {
        return this.categories;
    }

    constructor() {
        const ALL_CATEGORIES = new ResearchGuidesFromDOM('.research-guide-links', 'li[class="research-guide"]');
        this.categories = ALL_CATEGORIES.getCategories();
    }

}
