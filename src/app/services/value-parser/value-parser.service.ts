import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueParserService {

  static parseIdFromUrl(url: string): number {
    let id = url.match(/\/[0-9]\//)[0];
        id = id.substring(1, id.length -1);
        //return Number.isNaN(Number.parseInt(id)) ? id : Number.parseInt(id);
        return Number.parseInt(id);
  }
  constructor() { }
}
