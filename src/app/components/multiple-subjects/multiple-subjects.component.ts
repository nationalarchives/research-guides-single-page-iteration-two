import { Component, OnInit } from '@angular/core';

import { MultipleSubjectsService } from '../../services/multiple-subjects.service';
import { GuideService } from '../../services/guide.service';

@Component({
    selector: 'app-categories',
    templateUrl: 'multiple-subjects.component.html',
    styleUrls: [ 'multiple-subjects.component.css' ]
})
export class MultipleSubjectsComponent implements OnInit {

    categories;
    researchGuides;

    selectedCategories(): any[] {
        let selectedCategories = [];

        this.categories.forEach(function (i) {
            if (i.checked) {
                selectedCategories.push(i.key)
            }
        });

        return selectedCategories;

    }

    updateCategoryCheckedStatus(category, $event): void {
        category.checked = $event.srcElement.checked;
    }

    getGuides(): void {
        this.researchGuides = this.guideService.getGuides();
    }

    getCategories(): void {
        this.categories = this.categoryService.getCategories();
    }

    constructor(private categoryService: MultipleSubjectsService, private guideService: GuideService) {
        this.getGuides();
        this.getCategories();


    }

    ngOnInit() {
    }

}
