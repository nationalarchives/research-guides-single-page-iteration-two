import {Subject} from './../subject';

export const SUBJECTS: Subject[] = [
    {
        name: 'Second world war',
        key: 'second-world-war',
        parent: ''
    },
    {
        name: 'Medals and awards',
        key: 'medals-and-awards',
        parent: 'second-world-war'
    }
];