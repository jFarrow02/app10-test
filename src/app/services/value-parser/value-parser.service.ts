import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueParserService {

  static parseIdFromUrl(url: string): number {
    let array = url.split('/');
    let id = array.find( element => !Number.isNaN(Number.parseInt(element)));
    return Number.parseInt(id);
  }
  
  constructor() { }
}
