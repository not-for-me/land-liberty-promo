import { LandLibertyPromoPage } from './app.po';

describe('land-liberty-promo App', function() {
  let page: LandLibertyPromoPage;

  beforeEach(() => {
    page = new LandLibertyPromoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
