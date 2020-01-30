import { browser, by, element } from 'protractor';

export class FilmListPage {

    navigateTo(){
        return browser.get('http://localhost:4200/films') as Promise<any>;
    }
    getTitleText(){
        return element(by.css('.films > h1')).getText() as Promise<string>;
    }
}