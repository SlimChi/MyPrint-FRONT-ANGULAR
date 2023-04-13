import { Component, OnInit } from '@angular/core';
import { AdresseDto } from '../../swagger/services/models/adresse-dto';
import {HttpClient, HttpContext} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../services/helper/helper.service';

import { TypeAdresse } from '../../swagger/services/models/type-adresse';
import { UtilisateurDto } from '../../swagger/services/models/utilisateur-dto';
import { UtilisateursService } from '../../swagger/services/services/utilisateurs.service';
import {AddressService} from "../../swagger/services/services/address.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-adresses',
  templateUrl: './adresses.component.html',
  styleUrls: ['./adresses.component.css']
})
export class AdressesComponent implements OnInit {
// declaration
  users: UtilisateurDto[] = [];
  user: Array<UtilisateurDto> = [];
  adresse: Array<AdresseDto> = [];
  typesAdresse: Array<TypeAdresse> = []; // étape 1
  url: string | null = '';
  errorMessage: string | undefined;


  constructor(
    private http: HttpClient,
    private adresseService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UtilisateursService,
    private helperService: HelperService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.errorMessage = '';
    this.getAllTypeAdresse();
    this.findById();
  }

  private findById() {
    this.adresseService.findAll1(this.helperService.userId).subscribe({
      next: (adresses) => {
        this.adresse = adresses.filter((adresse) => adresse.utilisateurId === this.helperService.userId);
      },
      error: (err) => {
        console.error(err);
        // gérer le cas d'erreur ici
      }
    });
  }

  deleteAdresse(adresseId: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette adresse ?")) {
      this.adresseService.delete2({ 'address-id': adresseId }).subscribe({
        next: () => {
          this.snackBar.open('Adresse supprimée avec succès', 'Fermer', {
            duration: 3000
          });
          // Remove the deleted address from the list of addresses shown in the UI
          this.adresse = this.adresse.filter(a => a.id !== adresseId);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Erreur lors de la suppression de l\'adresse';
        }
      });
    }
  }

  private getAllTypeAdresse() { // étape 2
    this.adresseService.findAll1().subscribe({
      next: (data) => {
        this.typesAdresse = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  async back() {
    window.history.back();
  }


}
