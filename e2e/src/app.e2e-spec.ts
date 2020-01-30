import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to base url', () => {
    let currentUrl = browser.getCurrentUrl();
    console.log(currentUrl);
    expect(false).toBeTruthy();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('StarWarz');
  });

  it('should toggle status on/off', () => {
    page.navigateTo();
    expect(page.getLightStatus()).toEqual('The light is: off');
    expect(page.getToggleSwitchText()).toEqual('ON');
    page.toggleLightSwitch();
    expect(page.getLightStatus()).toEqual('The light is: on');
    expect(page.getToggleSwitchText()).toEqual('OFF');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
