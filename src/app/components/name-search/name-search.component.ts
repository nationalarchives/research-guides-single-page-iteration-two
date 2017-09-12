import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-name-search',
    templateUrl: './name-search.component.html',
    styleUrls: ['./name-search.component.css']
})

export class NameSearchComponent {

    @Output() searchStringUpdated = new EventEmitter<string>();

    changeSearchString(event: any) {
        let value: string = event.srcElement.value;
        this.searchStringUpdated.emit(value);
    }

    constructor() {}
}
