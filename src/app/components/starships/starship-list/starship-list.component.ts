import { Component, OnInit } from '@angular/core';
import { StarshipsHttpService } from '../../../services/starships/starships-http.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  private static url = 'https://swapi.co/api/starships';
  starshipsList: object[];
  constructor(private starshipsHttpSrvc: StarshipsHttpService) { }

  ngOnInit() {
    this.starshipsHttpSrvc.getStarshipsByUrl(StarshipListComponent.url)
      .subscribe(
        data => {
          this.starshipsList = data['results'];
        }
      )
  }

}
