export class ResearchGuidesFromDOM {

    subjects;
    categories = [];
    guides;
    selector;
    selectorMatchInDOM;
    selectorChildren;
    selectorGuides;
    selectorGuidesMatchInDOM;

    populateCategories(guides) {

        let allCategoriesWithDuplicates = [];

        for (let i = 0; i < guides.length; i++) {

            let categories = guides[ i ].getAttribute('data-categories');
            let categoriesAsArray = categories.split(' ');

            allCategoriesWithDuplicates = allCategoriesWithDuplicates.concat(categoriesAsArray);
        }

        let allCategoriesDeDuplicated: any = new Set(allCategoriesWithDuplicates);

        for (let category of Array.from(allCategoriesDeDuplicated.values())) {

            if (category !== '') {
                this.categories.push({
                    name: category,
                    key: category,
                    checked: false
                })
            }
        }
    }

    populateSubjects(items, JSONOutput, subCategories) {

        for (var i = 0; i < items.length; i++) {
            var item = items[ i ];

            JSONOutput.push({
                name: item.getElementsByTagName('a')[ 0 ].innerText,
                key: item.getElementsByTagName('a')[ 0 ].href.split('#')[ 1 ],
                parent: false
            });

            subCategories = item.querySelectorAll('li');

            for (var j = 0; j < subCategories.length; j++) {
                var subcategory = subCategories[ j ];

                JSONOutput.push({
                    name: subcategory.innerText,
                    key: subcategory.getElementsByTagName('a')[ 0 ].href.split('#')[ 1 ],
                    parent: item.getElementsByTagName('a')[ 0 ].href.split('#')[ 1 ]
                });
            }

        }
    }

    populateGuides(items, JSONOutput) {

        for (var i = 0; i < items.length; i++) {
            var item = items[ i ];

            JSONOutput.push({
                name: item.getAttribute('data-name'),
                subjects: item.getAttribute('data-categories').split(' '),
                recommended_for_subject: item.getAttribute('data-recommended-guide-for-category'),
                keywords: item.getAttribute('data-keywords').split(' '),
                all_records_available_online: item.getAttribute('data-all-records-available-online'),
                guide_href: item.getAttribute('data-guide-href'),
                data_available_on_partner: (item.getAttribute('data-available-on-partner') === 'false') ? false : item.getAttribute('data-available-on-partner'),
                id: item.getAttribute('id')
            });
        }

    }

    getCategories() {
        return this.categories;
    }

    getSubjects() {
        return this.subjects;
    }

    getGuides() {
        return this.guides;
    }

    setSubjects(subjectSelector) {
        this.selector = subjectSelector;
        this.selectorMatchInDOM = document.querySelectorAll(this.selector + ' > li');
        this.subjects = [];
        this.selectorChildren = [];
        this.populateSubjects(this.selectorMatchInDOM, this.subjects, this.selectorChildren);
    }

    setGuides(guidesSelector) {
        this.selectorGuides = guidesSelector;
        this.selectorGuidesMatchInDOM = document.querySelectorAll(this.selectorGuides);
        this.guides = [];
        this.populateGuides(this.selectorGuidesMatchInDOM, this.guides);
    }

    setCategories(guidesSelector) {
        this.selectorGuides = guidesSelector;
        this.selectorGuidesMatchInDOM = document.querySelectorAll(this.selectorGuides);
        this.populateCategories(this.selectorGuidesMatchInDOM);
    }

    constructor(subjectSelector, guidesSelector) {
        this.setSubjects(subjectSelector);
        this.setGuides(guidesSelector);
        this.setCategories(guidesSelector);
    }
}

