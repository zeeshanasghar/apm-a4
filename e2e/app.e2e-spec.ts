import { ApmV2Page } from './app.po';

describe('apm-v2 App', () => {
  let page: ApmV2Page;

  beforeEach(() => {
    page = new ApmV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
