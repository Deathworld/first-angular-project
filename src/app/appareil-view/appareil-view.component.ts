import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;




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
