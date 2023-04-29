import { Component, OnInit } from '@angular/core';
import { CommandesService } from "../../swagger/services/services/commandes.service";
import { UtilisateursService } from "../../swagger/services/services/utilisateurs.service";
import { HelperService } from "../../services/helper/helper.service";
import { UtilisateurDto } from "../../swagger/services/models/utilisateur-dto";
import { LigneCommandesService } from "../../swagger/services/services/ligne-commandes.service";
import {StatusesService} from "../../swagger/services/services/statuses.service";
import {StatusDto} from "../../swagger/services/models/status-dto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-manage-commande',
  templateUrl: './manage-commande.component.html',
  styleUrls: ['./manage-commande.component.css']
})
export class ManageCommandeComponent implements OnInit {
  users: Array<UtilisateurDto> = [];
  selectedUser: UtilisateurDto | null = null;
  ligneCommandes: any[] = [];
  commandes: any[] = [];
  afficherCommande=false;
  status: string[];
  statuses: StatusDto[];
  selectedStatus: StatusDto;

  constructor(
      private userService: UtilisateursService,
      private commandeService: CommandesService,
      private ligneCommandeService: LigneCommandesService,
      private helperService: HelperService,
      private statusService: StatusesService,
      private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.findAllusers();
    this.getStatuses();

  }

  private findAllusers() {
    this.userService.getUtilisateurs().subscribe({
      next: (value) => {
        this.users = value;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private findCommandeById() {
    if (this.selectedUser) {
      this.commandeService.getCommandesByIdUser({ idUtilisateur: this.selectedUser.idUtilisateur }).subscribe({
        next: (commandes) => {
          this.commandes = null; // initialiser "commandes" à "null"
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


  afficherCommandes(user: UtilisateurDto) {
    this.selectedUser = user;
    this.afficherCommande = true;
    this.findCommandeById();
  }


  getStatuses(): void {
    this.statusService.getStatuses().subscribe(
        (response: any) => {
          if (Array.isArray(response)) {
            // Vérifie si la réponse est un tableau
            this.statuses = response as StatusDto[];
            console.log(this.statuses);
          } else {
            console.error("Response is not an array");
          }
        },
        (error: any) => {
          console.log(error);
        }
    );
  }

  updateStatus(commande: any): void {
    this.commandeService.updateStatus2({
      numeroCommande: commande.numeroCommande,
      newIdStatus: commande.statusDto.idStatus,
    }).subscribe({
      next: (response: any) => {
        console.log(response);
        this.selectedStatus = this.statuses.find(status => status.idStatus === commande.statusDto.idStatus);
        this.snackBar.open('Le statut a été mis à jour', 'Fermer', {
          duration: 3000,
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }



}
