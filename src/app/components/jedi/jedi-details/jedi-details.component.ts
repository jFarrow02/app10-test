import { Component, OnInit, Input } from '@angular/core';
import { Jedi } from '../../../models/Jedi';
import { Species } from '../../../models/Species';
import { HttpReqService } from '../../../services/http/http-req.service';

@Component({
  selector: 'app-jedi-details',
  templateUrl: './jedi-details.component.html',
  styleUrls: ['./jedi-details.component.scss']
})
export class JediDetailsComponent implements OnInit {

  @Input() jedi: Jedi
  private speciesList: Species[] = [];
  constructor(private http: HttpReqService) { }

  ngOnChanges(){
    this.speciesList = [];
    let urlList = this.jedi.species;
    urlList.map( url => {
      this.http.get(url)
        .subscribe(
          s => {
            this.speciesList.push(new Species(s));
          }
        )
    });
  }

  ngOnInit() {}
}
