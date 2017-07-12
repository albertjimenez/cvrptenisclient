import { CvrptenisclientPage } from './app.po';

describe('cvrptenisclient App', () => {
  let page: CvrptenisclientPage;

  beforeEach(() => {
    page = new CvrptenisclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
