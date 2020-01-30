import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.app-main__title')).getText() as Promise<string>;
  }

  getLightStatus(){
    return element(by.css('.app-main__title + p')).getText() as Promise<string>;
  }

  getToggleSwitchText(){
    return element(by.css('.on-off-toggle')).getText() as Promise<string>;
  }

  toggleLightSwitch(){
    element(by.css('.on-off-toggle')).click();
  }
}
