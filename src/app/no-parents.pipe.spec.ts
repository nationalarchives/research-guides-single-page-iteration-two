import { NoParentsPipe } from './no-parents.pipe';

describe('NoParentsPipe', () => {
  it('create an instance', () => {
    const pipe = new NoParentsPipe();
    expect(pipe).toBeTruthy();
  });
});
