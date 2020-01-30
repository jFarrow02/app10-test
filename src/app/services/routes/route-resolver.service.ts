import { Injectable } from '@angular/core';

export interface RouteConstructor {
  path: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class RouteResolverService {

  private routeList: RouteConstructor[] = [
    { path: '/home', text: 'Home' },
    { path: '/films', text: 'Films' },
    { path: '/jedi', text: 'Jedi' },
    { path: '/starships', text: 'Starships' },
  ];

  getRouteList(): RouteConstructor[]{
    return this.routeList;
  }
  constructor() { }
}
