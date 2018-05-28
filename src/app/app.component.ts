import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my awesome app';
  isAuth = false;
  lastUpdate = new Date();

/*  appareilOne = 'Machine à laver';
  appareilTwo = 'Machine à refroidir';
  appareilThree = 'Gazinière à propulsion';*/


  /* Array d'appareils */

  appareils = [
    {
      name: 'Machine à voyager dans le temps',
      status: 'éteint'
    },

    {
      name: 'Machine à laver',
      status: 'éteint'
    },

    {
      name: 'Machine à refroidir',
      status: 'loin'
    }
  ];

  /*  Attends 4 secondes au chargement de la page */
  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  onEnable(){
    console.log('On allume tout mon pote !');
  }
}
