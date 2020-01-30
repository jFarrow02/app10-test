import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../services/http/http-req.service';
import { Film } from '../../../models/Film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  fetchErrorMsg: string;
  filmsList: Film[];
  httpFetchFailed: boolean = false;
  private static url = 'https://swapi.co/api/films/';

  loading = true;
  title = 'Films';

  getFilmByUrl(id: number){
    console.log(id);
  }
  constructor(private http: HttpReqService) { }

  ngOnInit() {
    this.http.get(FilmListComponent.url)
      .subscribe(
        data => {
          this.filmsList = data['results'].map( film => new Film(film));
          this.loading = false;
          console.log(data);
          //console.log(this.filmsList);  //OK
        },
        error => {
          this.fetchErrorMsg = error;
          this.httpFetchFailed = true;
        }
      )
  }

}
