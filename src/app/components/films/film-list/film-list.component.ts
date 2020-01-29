import { Component, OnInit } from '@angular/core';
import { FilmsHttpService } from '../../../services/films/films-http.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  fetchErrorMsg: string;
  filmsList: object[];
  httpFetchFailed: boolean = false;
  private static url = 'https://swapi.co/api/films/';

  constructor(private filmsHttpSrvc: FilmsHttpService) { }

  ngOnInit() {
    this.filmsHttpSrvc.getFilmsByUrl(FilmListComponent.url)
      .subscribe(
        data => {this.filmsList = data['results']},
        error => {
          this.fetchErrorMsg = error;
          this.httpFetchFailed = true;
        }
      )
  }

}
