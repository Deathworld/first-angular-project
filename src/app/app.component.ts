import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'my awesome app';

  appareils: any[];

  isAuth = true;
  lastUpdate = new Date();



  // Importe AppareilService
  constructor(private appareilService : AppareilService){
    /*  Attend 4 secondes au chargement de la page */
    /*      setTimeout(
            () => {
              this.isAuth = true;
            }, 4000
          );*/
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }

  onEnable(){
    console.log('On allume tout mon pote !');
    // On appelle la fonction permettant de tout allumer
    this.appareilService.switchOnAll();
  }

  onDisable(){
    console.log('On éteint tout mon pote !');

    // Popup en haut du navigateur qui demande de confirmer
    if(confirm('Veuillez confirmer')) {
      // On appelle la fonction permettant de tout éteindre
      this.appareilService.switchOffAll();
    } else{
      return null;
    }
  }
}
