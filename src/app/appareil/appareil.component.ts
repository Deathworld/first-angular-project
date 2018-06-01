import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() statut: string;
  @Input() index: number;

  appareils: any[];



  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
      this.appareils = this.appareilService.appareils;
  }

  getStatus() {
    return this.statut;
  }

  onSwitch() {
    if(this.statut === 'allumé') {
      this.appareilService.switchOnOff(this.index);
    } else if(this.statut === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }

  }

}
