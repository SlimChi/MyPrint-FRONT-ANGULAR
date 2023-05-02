import { Component, OnInit } from '@angular/core';

import { HelperService } from '../../services/helper/helper.service';

import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {TokenService} from "../../services/token-service/token.service";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {AdresseDto} from "../../swagger/services/models/adresse-dto";
import {TypeAdresse} from "../../swagger/services/models/type-adresse";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {CommandesService} from "../../swagger/services/services/commandes.service";
import {AddressService} from "../../swagger/services/services/address.service";


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: Array<UtilisateurDto> = [];
  selectedUser: UtilisateurDto | null = null;
  commande: string; // variable pour stocker les commandes

  adresse: Array<AdresseDto> = [];
  showDetail = false;
  typesAdresse: Array<TypeAdresse> = []; // étape 1
  userRole: boolean = false;
  adminRole: boolean = false;
  loggedInUserName: string | undefined = undefined;
 loggedUserRole: string | undefined = undefined;
  filteredUsers: any[];

  constructor(
    private userService: UtilisateursService,
    private helpService: HelperService,
    private adresseService: AddressService,
    private commandeService: CommandesService,
    private helperService: HelperService,
    private tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    this.findAllusers();
    this.getAllTypeAdresse().subscribe(() => {
      console.log(this.typesAdresse);
    });
    this.findById();
    this.getRoles();
  }

  private findAllusers() {

    this.userService.getUtilisateurs().subscribe({
      next: (value) => {
        this.users = value;

      },
    });
  }

  showDetails(user: UtilisateurDto) {
    this.selectedUser = user;
    this.showDetail = true;
    this.findById();
    this.getAllTypeAdresse()
  }


  private findById() {
    this.adresseService.findAll1(this.helperService.userId).subscribe({
      next: (adresses) => {
        if (this.selectedUser) {
          this.adresse = adresses.filter((adresse) => adresse.utilisateurId === this.selectedUser?.idUtilisateur
          );
        } else {
          this.adresse = adresses.filter((adresse) => adresse.utilisateurId === this.helperService.userId);
        }
      },
      error: (err) => {
        console.error(err);
        // gérer le cas d'erreur ici
      }
    });
  }

  private getAllTypeAdresse(): Observable<any> {
    return new Observable((observer) => {
      this.adresseService.findAll1().subscribe({
        next: (data) => {
          this.typesAdresse = data;
          observer.next(data);
          observer.complete();
        },
        error: (err) => {
          console.error(err);
          observer.error(err);
        }
      });
    });
  }

  getRoles() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = new JwtHelperService().decodeToken(token);
      const authorities = decodedToken.authorities;
      this.userRole = authorities.includes('ROLE_USER');
      this.adminRole = authorities.includes('ROLE_ADMIN');
      this.loggedInUserName = this.getLoggedInUserName(authorities);

    }
    this.tokenService.getToken();
  }

  private getLoggedInUserName(authorities: any[]): string {
    if (authorities.includes('ROLE_USER')) {
      return 'Utilisateur';
    } else if (authorities.includes('ROLE_ADMIN')) {
      return 'Administrateur';
    } else {
      return '';
    }
  }


}
