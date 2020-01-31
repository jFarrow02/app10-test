import { Component, OnInit, Input } from '@angular/core';
import { Jedi } from '../../../models/Jedi';
@Component({
  selector: 'app-jedi-details',
  templateUrl: './jedi-details.component.html',
  styleUrls: ['./jedi-details.component.scss']
})
export class JediDetailsComponent implements OnInit {

  @Input() jedi: Jedi
  constructor() { }

  ngOnInit() {
  }

}
