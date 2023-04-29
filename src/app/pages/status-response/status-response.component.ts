import {Component, Input, OnInit} from '@angular/core';
import {StatusDto} from "../../swagger/services/models/status-dto";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {CommandesService} from "../../swagger/services/services/commandes.service";
import {LigneCommandesService} from "../../swagger/services/services/ligne-commandes.service";
import {HelperService} from "../../services/helper/helper.service";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";

@Component({
  selector: 'app-status-response',
  templateUrl: './status-response.component.html',
  styleUrls: ['./status-response.component.css']
})
export class StatusResponseComponent implements OnInit{
  @Input() libelleStatut: string;
  users: Array<UtilisateurDto> = [];
  user: UtilisateurDto;
  commandes: any[] = [];
  statuses: StatusDto[];

  constructor(      private userService: UtilisateursService,
                    private commandeService: CommandesService,
                    private ligneCommandeService: LigneCommandesService,
                    private helperService: HelperService,) {
  }

  ngOnInit(): void {
    this.findAllusers();
  }

  private findAllusers() {
    this.userService.getUtilisateurs().subscribe({
      next: (value) => {
        this.users = value;
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
      this.commandeService.getCommandesByIdUser({ idUtilisateur: this.helperService.userId }).subscribe({
        next: (commandes) => {
          this.commandes = commandes as unknown as any[];

        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      // gérer le cas où aucun utilisateur n'est sélectionné
    }
  }

  async back() {
    window.history.back();
  }

}
