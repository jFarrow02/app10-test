import { browser } from 'protractor';
import { FilmListPage } from './film-list.po';

let page: FilmListPage;

describe('FilmListPage e2e tests', () => {
    page = new FilmListPage();

    it('should set a title', () => {
        expect(page.getTitleText()).toEqual('Films');
    })
})