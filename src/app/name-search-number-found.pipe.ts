import { Pipe, PipeTransform } from '@angular/core';

import {Guide} from './guide';

@Pipe({
  name: 'nameSearchNumberFound'
})
export class NameSearchNumberFoundPipe implements PipeTransform {

  transform(allGuides: Guide[], searchText): any {

    const numberOfMatchingGuides = allGuides.filter(function (guide) {

      if (searchText === '') {
        return guide;
      }

      const guideNameNoSpacesLowerCase = guide.name.split(' ').join('').toLowerCase(),
          filterTextNoSpacesLowerCase = searchText.split(' ').join('').toLowerCase();

      if (guideNameNoSpacesLowerCase.indexOf(filterTextNoSpacesLowerCase) !== -1) {
        return guide;
      }
    });

    return numberOfMatchingGuides.length;
  }

}
