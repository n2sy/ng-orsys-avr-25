export class Candidat {
  //   private id: number;
  //   private prenom: string;

  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this.id = id;
    // this.prenom = prenom;
  }
}

// Méthode classique
// export class Candidat {
//   private id: number;
//   private prenom: string;

//   constructor(id: number, prenom: string) {
//     this.id = id;
//     this.prenom = prenom;
//   }
// }
