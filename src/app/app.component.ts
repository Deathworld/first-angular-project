import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'my awesome firebase app';


  constructor(){
      const config = {
          apiKey: 'AIzaSyD3L_atRn6gEYlZ30CNp6G8HKtPib4QDdg',
          authDomain: 'fir-app-7cd52.firebaseapp.com',
          databaseURL: 'https://fir-app-7cd52.firebaseio.com',
          projectId: 'fir-app-7cd52',
          storageBucket: '',
          messagingSenderId: '618933270917'
      };
      firebase.initializeApp(config);
  }

  ngOnInit() {
  }
}
