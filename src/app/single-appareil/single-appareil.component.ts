import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.css']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';


  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    /* Récupère les paramètres de l'appareil en question à partir de son id */
    /* Appareils stockés dans appareil.service.ts */
    const id = this.route.snapshot.params['id'];
    this.status = this.appareilService.getAppareilById(+id).status;
    this.name = this.appareilService.getAppareilById(+id).name;

  }

}
