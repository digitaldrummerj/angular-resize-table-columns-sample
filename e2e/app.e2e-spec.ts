import { NemecPage } from './app.po';

describe('nemec App', () => {
  let page: NemecPage;

  beforeEach(() => {
    page = new NemecPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
