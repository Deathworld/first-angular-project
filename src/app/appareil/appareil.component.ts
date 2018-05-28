import { Component, OnInit, Input } from '@angular/core';
import {Input} from '@angular/compiler/src/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() statut: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.statut;
  }

}
