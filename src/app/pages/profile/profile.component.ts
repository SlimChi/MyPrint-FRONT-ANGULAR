import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper/helper.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

import {TokenService} from "../../services/token-service/token.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RegisterRequest} from "../../swagger/service/models/register-request";
import {UtilisateurDto} from "../../swagger/service/models/utilisateur-dto";
import {AdresseDto} from "../../swagger/service/models/adresse-dto";
import {UtilisateursService} from "../../swagger/service/services/utilisateurs.service";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  userDto: RegisterRequest = {password: '', email: '', nom: '', prenom: '',telephone:''};
  user: UtilisateurDto = {email: '', nom: '', prenom: '',telephone:''};
  isLogout = false;
  users: Array<UtilisateurDto> = [];
  adresse: Array<AdresseDto> = [];
  editMode = false;
  url: string | null = '';
  successMsg = '';
  errorMessage: Array<string> = [];
  errorMessage2: string | null = null;
  userRole: boolean = false;
  constructor(
    private http: HttpClient,
    private userService: UtilisateursService,
    private router: Router,
    public helperService: HelperService,
    public tokenService: TokenService,
    private snackBar: MatSnackBar

  ) { }


  ngOnInit(): void {

    console.log(this.helperService.userId);
    console.log(this.findById());
  }
  private findById() {
    this.userService.getUtilisateurById({"idUtilisateur": this.helperService.userId})
      .subscribe({
        next: (data) => {
          this.userDto = data as unknown as RegisterRequest; // Cast de la variable data en RegisterRequest
          console.log(data);
        },
        error: (err) => {
          console.error(err);
        }
      });

  }

  save() {
    this.successMsg = '';
    this.errorMessage = [];
    if (!this.userDto.nom || !this.userDto.prenom) {
      this.errorMessage2 = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }
    // Assign the properties of this.userDto to this.user
    this.userService.updateUser({
      id: this.helperService.userId,
      firstName: this.userDto.prenom,
      lastName: this.userDto.nom,
      email: this.userDto.email ?? '',
      telephone: this.userDto.telephone ?? ''
    }).subscribe({
      next: () => {
        this.successMsg = 'Votre profil a été mis à jour';
        this.editMode = false;
        this.snackBar.open('Votre profil a été mis à jour', 'Fermer', { duration: 3000 });
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err.error.errorMessage || 'Une erreur s\'est produite lors de la mise à jour de votre profil';
        this.snackBar.open('Une erreur est survenue lors de la mise à jour de votre profil', 'Fermer',{ duration: 3000 });
      }
    });
  }


  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  async cancel() {
    this.editMode = false;
  }

  onDeleteUserAndAddresses() {
    this.errorMessage =[];
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
    if (confirmation) {
      this.userService.deleteUserAndAddresses({
        id: this.helperService.userId,
      }).subscribe({
        next: () => {
          this.snackBar.open('Votre compte a été supprimé avec succès.', 'Fermer');
          this.tokenService.clearToken()
          console.log('User and addresses deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting user and addresses', error);
        }
      });
    }
  }


  async back() {
    window.history.back();
    this.editMode = false;
  }

}
