import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";
import {forkJoin} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdresseDto} from "../../swagger/services/models/adresse-dto";
import {TypeAdresseDto} from "../../swagger/services/models/type-adresse-dto";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {AddressService} from "../../swagger/services/services/address.service";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";


@Component({
  selector: 'app-add-adresse',
  templateUrl: './add-adresse.component.html',
  styleUrls: ['./add-adresse.component.css']
})
export class AddAdresseComponent implements OnInit{
  typesAdresses = [
    { id: 1, nom: 'Adresse de livraison' },
    { id: 2, nom: 'Adresse de facturation' }
  ];
  adresse: AdresseDto = {};
  adresse2: Array<AdresseDto> = [];
  errorMessage: string | null = null;
  successMsg = '';
  typesAdresse: Array<TypeAdresseDto> = []; // étape 1

  userDto: unknown = {email: '', nom: '', prenom: ''};
  user: UtilisateurDto = {email: '', nom: '', prenom: ''};

  users: Array<UtilisateurDto> = [];

  constructor(
    private adresseService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UtilisateursService,
    private helperService: HelperService,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.findById();
    console.log(this.helperService.userId)
    console.log( this.findById())

  }

  private findById() {
    forkJoin([
      this.userService.getUtilisateurById({
        "idUtilisateur": this.helperService.userId}),
      this.adresseService.findAll1() // étape 2
    ]).subscribe({
      next: ([userData, typesAdresseData]) => {
        this.userDto = userData;
        this.typesAdresse = typesAdresseData;
      },
      error: (err) => {
        console.error(err);
        // handle the error scenario here
      }
    });
  }

  addAdresse() {
    this.successMsg = '';
    const userId = this.helperService.userId;
    if (!this.adresse.rue || !this.adresse.codePostal || !this.adresse.ville || !this.adresse.typeAdresseDto) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }
    if (!this.adresse.id) {
      this.adresse.utilisateurId = userId;
      this.adresseService.save({
        body: this.adresse
      }).subscribe({
        next: () => {
          this.router.navigate(['user/adresses']);
          this.snackBar.open('Votre adresse a été ajoutée avec succès !', 'Fermer', {
            duration: 3000
          });
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = "Impossible d'ajouter votre adresse";
          this.snackBar.open("Impossible d'ajouter votre adresse.", 'Fermer', {
            duration: 3000
          });
        }
      });
    }
  }
  async back() {
    window.history.back();
  }




  async cancel() {
    await this.router.navigate(['user/adresses']);
  }
}
