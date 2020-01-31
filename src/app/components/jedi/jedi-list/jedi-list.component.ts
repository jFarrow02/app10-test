import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../services/http/http-req.service';
import { PaginationService } from '../../../services/pagination/pagination.service';
import { DataCacheService } from '../../../services/cache/data-cache.service';
import { PageInterface } from '../../../models/Page';
import { JediInterface, Jedi } from '../../../models/Jedi';
@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent implements OnInit {

  private currentJedi: Jedi;
  private currentPage: string;
  loading = true;
  title = 'Jedi';
  private pageCount: number;
  private jediCount: number;
  private jediList: Jedi[];
  private jediPerPage = 10;
  private pageList: PageInterface[] = [];
  private static URL = 'https://swapi.co/api/people/';

  jedify(data: JediInterface[]){
    return data.map( jedi => new Jedi(jedi));
  }

  getJediByPage(url: string){
    this.loading = true;
    if(this.cache.getJediCache().has(url)){
      this.jediList = this.cache.jediCache.get(url);
    }
    else{
      this.http.get(url)
      .subscribe(
        data => {
          this.jediList = this.jedify(data['results']);
          this.cache.addToJediCache(url, this.jediList);
        }
      );
    }
    this.loading = false;
  }

  setCurrentJedi(id: number){
    this.currentJedi = this.jediList.filter( jedi => jedi.id === id)[0];
  }

  buildPages(){
    for(let i = 1; i <= this.pageCount; i+=1){
      let url = `${JediListComponent.URL}?page=${i}`;
      if(i === 1){this.cache.addToJediCache(url, this.jediList)}
      let obj = { url: url, pageNumber: i};
      this.pageList.push(obj);
    }
  }
  constructor(
    private http: HttpReqService,
    private page: PaginationService,
    private cache: DataCacheService,
    ) { }

  ngOnInit() {
    if(!this.cache.jediCache.has(`${JediListComponent.URL}?page=1`)){
      this.http.get(JediListComponent.URL)
      .subscribe(
        data => {
          this.jediList = this.jedify(data['results']);
          this.jediCount = data.count;
          if( !this.cache.jediCache.has('count')){
            this.cache.jediCache.set('count', this.jediCount);
          }
          this.currentJedi = this.jediList[0];
          this.loading = false;
          this.pageCount = this.page.paginate(this.jediCount, this.jediPerPage);
          this.buildPages();
        }
      )
    } 
    else{
      this.jediList = this.cache.jediCache.get(`${JediListComponent.URL}?page=1`);
      this.loading = false;
      this.currentJedi = this.jediList[0];
      this.jediCount = this.cache.jediCache.get('count');
      this.pageCount = this.page.paginate(this.jediCount, this.jediPerPage);
      this.buildPages();
    }
    
  }

}
