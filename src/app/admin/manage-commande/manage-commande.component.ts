import { Component, OnInit } from '@angular/core';
import { CommandesService } from "../../swagger/services/services/commandes.service";
import { UtilisateursService } from "../../swagger/services/services/utilisateurs.service";
import { HelperService } from "../../services/helper/helper.service";
import { UtilisateurDto } from "../../swagger/services/models/utilisateur-dto";
import { LigneCommandesService } from "../../swagger/services/services/ligne-commandes.service";

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
  commande ;
  afficherCommande=false;
  statusClass: string = 'active';


  constructor(
      private userService: UtilisateursService,
      private commandeService: CommandesService,
      private ligneCommandeService: LigneCommandesService,
      private helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.findAllusers();
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

  
}
