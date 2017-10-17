 class ResearchGuidesFromDOM {

  populateSubjects(items, JSONOutput, subCategories){
   
    items.forEach(function(i) {
  
      JSONOutput.push({
            name: i.getElementsByTagName('a')[0].innerText,
            key: i.getElementsByTagName('a')[0].href.split("#")[1],
            parent: false
          });

      subCategories = i.querySelectorAll('li');

      subCategories.forEach(function(j) {
        JSONOutput.push({
          name: j.innerText,
          key: j.getElementsByTagName('a')[0].href.split("#")[1],
          parent: i.getElementsByTagName('a')[0].href.split("#")[1]
        }); 
      });
    });
  }

  populateGuides(items, JSONOutput){
    items.forEach(function(i) {
      JSONOutput.push({
        name: i.getAttribute("data-name"),
        categories: i.getAttribute("data-categories").split(" "),
        recommended_for_category: i.getAttribute("data-recommended-guide-for-category"),
        keywords: i.getAttribute("data-keywords").split(" "),
        all_records_available_online: i.getAttribute("data-all-records-available-online"),
        guide_href: i.getAttribute("data-guide-href"),
        data_available_on_partner: i.getAttribute("data-available-on-partner"),
        id: i.getAttribute("id")
      });
    });
  }

  getSubjects(){
    return this.subjects;
  }

  getGuides(){
    return this.guides;
  }
  
  setSubjects(subjectSelector){
    this.selector = subjectSelector;
    this.selectorMatchInDOM = document.querySelectorAll(this.selector + ' > li');
    this.subjects = [];
    this.selectorChildren = [];
    this.populateSubjects(this.selectorMatchInDOM, this.subjects, this.selectorChildren);
  }

  setGuides(guidesSelector){
    this.selectorGuides = guidesSelector;
    this.selectorGuidesMatchInDOM = document.querySelectorAll(this.selectorGuides);
    this.guides = [];
    this.populateGuides(this.selectorGuidesMatchInDOM, this.guides);
  }

  constructor(subjectSelector, guidesSelector) {
    this.setSubjects(subjectSelector);
    this.setGuides(guidesSelector);
  }

};


var x = new ResearchGuidesFromDOM(".research-guide-links", "div[class='research-guide']");





