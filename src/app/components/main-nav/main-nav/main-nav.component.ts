import { Component, OnInit } from '@angular/core';
import { RouteConstructor, RouteResolverService } from '../../../services/routes/route-resolver.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  routesList: RouteConstructor[];
  constructor(private res: RouteResolverService ) { 
    this.routesList = this.res.getRouteList();
  }

  ngOnInit() {
  }

}
