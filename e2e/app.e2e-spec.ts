import { MiDonacionAppWebAngularPage } from './app.po';

describe('mi-donacion-app-web-angular App', () => {
  let page: MiDonacionAppWebAngularPage;

  beforeEach(() => {
    page = new MiDonacionAppWebAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
