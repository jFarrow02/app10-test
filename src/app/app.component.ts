import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarWarz';
  status = 'off';
  switchText = 'ON';

  setStatus(){
    this.status = this.status === 'off' ? 'on' : 'off';
    this.switchText = this.status === 'off' ? 'ON' : 'OFF';
  }
}
