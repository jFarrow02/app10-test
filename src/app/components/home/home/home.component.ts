import { Component, OnInit } from '@angular/core';
import { HttpReqService } from '../../../services/http/http-req.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  readonly URL = 'https://apiservertest-env.yxevkjc8ci.us-east-1.elasticbeanstalk.com/'
  constructor(private httpSrvc: HttpReqService) { }

  ngOnInit() {
    this.httpSrvc.get(this.URL)
      .subscribe(
        data => console.log(data),
        err => console.error(err)
      )
  }

}
