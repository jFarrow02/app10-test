import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.scss']
})
export class JediListComponent implements OnInit {

  title = 'Jedi';
  constructor() { }

  ngOnInit() {
  }

}
