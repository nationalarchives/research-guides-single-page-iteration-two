import { AppPage } from './app.po';

describe('research-guides-single-page-iteration-two App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to guides!');
  });
});
