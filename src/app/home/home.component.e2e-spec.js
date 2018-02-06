describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <sc-home>', function () {
    var home = element(by.css('sc-app sc-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
