import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.css']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';


  constructor(private appareilService: AppareilService,
              private router: Router) { }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    /* Crée un appareil avec les arguments*/
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);

    /* Redirige vers la liste lors du submit*/
    this.router.navigate(['/appareils']);
  }

}
