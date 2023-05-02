import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";


import {MatSnackBar} from "@angular/material/snack-bar";
import {AdresseDto} from "../../swagger/service/models/adresse-dto";
import {AddressService} from "../../swagger/service/services/address.service";

@Component({
  selector: 'app-update-adresse',
  templateUrl: './update-adresse.component.html',
  styleUrls: ['./update-adresse.component.css']
})
export class UpdateAdresseComponent implements OnInit{

  typesAdresses = [
    { id: 1, nom: 'Adresse de livraison' },
    { id: 2, nom: 'Adresse de facturation' }
  ];
  adresse: AdresseDto = {id: 0, rue: '', ville: '', codePostal: ''};
  errorMessage: string | null = null;
  successMsg = '';
  constructor(
    private adresseService: AddressService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const adresseId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAdresseById(adresseId);
  }

  getAdresseById(adresseId: number) {
    this.adresseService.findById({'address-id': adresseId})      .subscribe({
      next: (data) => {
        this.adresse = data;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error retrieving address details';
      }
    });
  }

  updateAdresse() {
    this.successMsg = '';
    if (!this.adresse.rue || !this.adresse.codePostal || !this.adresse.ville || !this.adresse.typeAdresseDto) {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }
    if (this.adresse.id) {
      this.adresseService.save({
        body: this.adresse
      }).subscribe({
        next: () => {
          this.router.navigate(['user/adresses']);
          this.snackBar.open('Adresse mise à jour avec succès', 'Fermer', { duration: 3000 });
        },
        error: (err: any) => {
          console.error(err);
          this.errorMessage = 'Erreur lors de la mise à jour de l\'adresse';
          this.snackBar.open('Impossible de mettre à jour votre adresse', 'Fermer', { duration: 3000 });
        }
      });
    }
  }

  async cancel() {
    await this.router.navigate(['user/adresses']);
  }
}
