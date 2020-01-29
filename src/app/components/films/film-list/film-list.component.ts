import { Component, OnInit } from '@angular/core';
import { FilmsHttpService } from '../../../services/films/films-http.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  constructor(private filmsHttpSrvc: FilmsHttpService) { }

  ngOnInit() {
  }

}
