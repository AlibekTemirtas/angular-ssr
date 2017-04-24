import { Ssr2Page } from './app.po';

describe('ssr2 App', () => {
  let page: Ssr2Page;

  beforeEach(() => {
    page = new Ssr2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
