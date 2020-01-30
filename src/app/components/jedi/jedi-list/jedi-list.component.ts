import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../services/http/http-req.service';

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
  private jediPerPage = 10;
  private pageList: object[] = [];
  private static URL = 'https://swapi.co/api/people/';

  paginate(count: number, perPage: number): number{
    let numberOfPages = count % perPage === 0 ? count / perPage : (count / perPage) + 1;
    return numberOfPages;
  }

  constructor(private http: HttpReqService) { }

  ngOnInit() {
    this.http.get(JediListComponent.URL)
      .subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.jediCount = data.count;
          this.pageCount = this.paginate(this.jediCount, this.jediPerPage);
          for(let i = 1; i <= this.pageCount; i+=1){
            let obj = { url: `${JediListComponent.URL}${i}/`, pageNumber: i};
            this.pageList.push(obj);
          }
        }
      )
  }

}
