import { TestBed, inject } from '@angular/core/testing';

import { MultipleSubjectsService } from './multiple-subjects.service';

describe('MultipleSubjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultipleSubjectsService]
    });
  });

  it('should be created', inject([MultipleSubjectsService], (service: MultipleSubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
