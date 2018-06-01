export class AppareilService {

  /* Appareils array*/
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

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


}
