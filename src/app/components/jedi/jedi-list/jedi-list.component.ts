import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../services/http/http-req.service';
import { PaginationService } from '../../../services/pagination/pagination.service';
import { PageInterface } from '../../../models/Page';
import { JediInterface, Jedi } from '../../../models/Jedi';
@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent implements OnInit {

  loading = true;
  title = 'Jedi';
  private pageCount: number;
  private jediCount: number;
  private jediList: Jedi[] = [];
  private jediPerPage = 10;
  private pageList: PageInterface[] = [];
  private static URL = 'https://swapi.co/api/people/';

  jedify(data: JediInterface[]){
    return data.map( jedi => new Jedi(jedi));
  }

  getJediByPage(url: string){
    console.log(url);
    this.http.get(url)
      .subscribe(
        data => {
          this.jediList = this.jedify(data['results']);
        }
      )
  }
  constructor(private http: HttpReqService, private page: PaginationService) { }

  ngOnInit() {
    this.http.get(JediListComponent.URL)
      .subscribe(
        data => {
          this.jediList = this.jedify(data['results']);
          this.loading = false;
          this.jediCount = data.count;
          this.pageCount = this.page.paginate(this.jediCount, this.jediPerPage);
          for(let i = 1; i <= this.pageCount; i+=1){
            let obj = { url: `${JediListComponent.URL}?page=${i}`, pageNumber: i};
            this.pageList.push(obj);
          }
        }
      )
  }

}
