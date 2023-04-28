import {Component, OnInit} from '@angular/core';
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {StatusDto} from "../../swagger/services/models/status-dto";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {CommandesService} from "../../swagger/services/services/commandes.service";
import {LigneCommandesService} from "../../swagger/services/services/ligne-commandes.service";
import {HelperService} from "../../services/helper/helper.service";
import {StatusesService} from "../../swagger/services/services/statuses.service";

@Component({
  selector: 'app-historique-commande',
  templateUrl: './historique-commande.component.html',
  styleUrls: ['./historique-commande.component.css']
})
export class HistoriqueCommandeComponent implements OnInit {
  users: Array<UtilisateurDto> = [];
  user: UtilisateurDto;
  ligneCommandes: any[] = [];
  commandes: any[] = [];
  afficherCommande = false;
  statuses: StatusDto[];

  constructor(
      private userService: UtilisateursService,
      private commandeService: CommandesService,
      private ligneCommandeService: LigneCommandesService,
      private helperService: HelperService,
  ) {
  }

  ngOnInit(): void {
    this.findAllusers();
  }

  private findAllusers() {
    this.userService.getUtilisateurs().subscribe({
      next: (value) => {
        this.users = value;
// trouver l'utilisateur connecté
        this.user = this.users.find((user) => user.idUtilisateur === this.helperService.userId);
        this.findCommandeById();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private findCommandeById() {
    if (this.user) {
      this.commandeService.getCommandesByIdUser({idUtilisateur: this.helperService.userId}).subscribe({
        next: (commandes) => {
          this.commandes = commandes as unknown as any[]; // mettre à jour les nouvelles commandes
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
// gérer le cas où aucun utilisateur n'est sélectionné
    }
  }
  private findLigneCommandeById() {
    if (this.user) {
      this.ligneCommandeService.getAll1({idUtilisateur: this.helperService.userId}).subscribe({
        next: (ligneCommandes) => {
          this.ligneCommandes = ligneCommandes as unknown as any[]; // mettre à jour les nouvelles commandes
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
// gérer le cas où aucun utilisateur n'est sélectionné
    }
  }

  afficherCommandes(user: UtilisateurDto) {
    this.user = user;
    this.findCommandeById();
    this.afficherCommande = true;
  }
}
