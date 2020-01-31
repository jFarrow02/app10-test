import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  paginate(count: number, perPage: number): number{
    let numberOfPages = count % perPage === 0 ? count / perPage : (count / perPage) + 1;
    return numberOfPages;
  }

  constructor() { }
}
