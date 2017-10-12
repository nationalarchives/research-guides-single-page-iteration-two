import { Pipe, PipeTransform } from '@angular/core';

import { Guide } from './guide';

@Pipe({
    name: 'selectedCategories'
})
export class SelectedCategoriesPipe implements PipeTransform {
    transform(allGuides: Guide[], selectedCategories) {

        let guidesToReturn = [];

        allGuides.forEach(function (i) {

            let allFound = selectedCategories.every(function(value) {
                return (i.subjects.indexOf(value) !== -1);
            });

            if(allFound) {
                guidesToReturn.push(i);
            }

            console.log(selectedCategories);
            console.log(i.subjects);

        });

        return guidesToReturn;

    }
}
