import { Component, OnInit } from '@angular/core';
import { UtilisateurDto } from '../../swagger/services/models/utilisateur-dto';
import { UtilisateursService } from '../../swagger/services/services/utilisateurs.service';
import { HelperService } from '../../services/helper/helper.service';
import {AddressService} from "../../swagger/services/services/address.service";
import {AdresseDto} from "../../swagger/services/models/adresse-dto";
import {TypeAdresse} from "../../swagger/services/models/type-adresse";
import {forkJoin, Observable} from "rxjs";
import {CommandesService} from "../../swagger/services/services/commandes.service";

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


  constructor(
    private userService: UtilisateursService,
    private helpService: HelperService,
    private adresseService: AddressService,
    private commandeService: CommandesService,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.findAllusers();
    this.getAllTypeAdresse().subscribe(() => {
      console.log(this.typesAdresse);
    });
    this.findById();
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

}
