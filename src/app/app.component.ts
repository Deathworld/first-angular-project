import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {Observable} from 'rxjs';
import {User} from './models/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'my awesome app';

  secondes: number;

  constructor(){}

  ngOnInit() {
    /* Emet un chiffre croissant à intervalles réguliers */
/*    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );*/
  }
}
