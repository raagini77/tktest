import { TktestPage } from './app.po';

describe('tktest App', function() {
  let page: TktestPage;

  beforeEach(() => {
    page = new TktestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
