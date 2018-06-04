import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppareilService {

  appareilsSubject = new Subject<any[]>();


  /* Appareils array*/
  appareils = [];

  constructor(private httpClient: HttpClient) { }



  /* Enrengistre l'array appareils dans la base de données*/
  saveAppareilsToServer() {
    this.httpClient
      .post('https://first-angular-app-bc505.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  /* Change every appareil's statut */
  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }




  /* Change every appareil's statut */
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  /* Change a single appareil's statut */

  switchOnOne(i: number){
    this.appareils[i].status = 'allumé';
  }

  /* Change a single appareil's statut */
  switchOnOff(i: number){
    this.appareils[i].status = 'éteint';
  }


  /*  Return appareil by id */
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }



  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }




  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://first-angular-app-bc505.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          console.log(this.appareils);
          //this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }


}
