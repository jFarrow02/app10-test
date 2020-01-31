import { Injectable } from '@angular/core';
import { Jedi } from '../../models/Jedi';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {

  private jediCache: Map<string, any> = new Map();

  addToJediCache( key: string, value: Jedi[]){
    this.jediCache.set(key, value);
  }

  clearJediCache(){
    this.jediCache.clear();
  }

  getJediCache(){
    return this.jediCache;
  }

  constructor() { }
}
