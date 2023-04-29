import {Component, Input, OnInit} from '@angular/core';
import {StatusDto} from "../../swagger/services/models/status-dto";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {CommandesService} from "../../swagger/services/services/commandes.service";
import {LigneCommandesService} from "../../swagger/services/services/ligne-commandes.service";
import {HelperService} from "../../services/helper/helper.service";
import {UtilisateurDto} from "../../swagger/services/models/utilisateur-dto";
import {MailControllerService} from "../../swagger/services/services/mail-controller.service";
import {EmailMessage} from "../../swagger/services/models/email-message";
import {firstValueFrom} from "rxjs";

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
                    private mailService: MailControllerService,
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
          this.calculateAllCompletedSteps(); // ajoute une propriété completedSteps pour chaque commande
          this.sortCommandesByCompletedSteps();
          const emailSent = localStorage.getItem('emailSent'); // vérifiez si l'email a déjà été envoyé

          // Recherchez toutes les commandes dont le statut est "Envoyer" et envoyez un email à l'utilisateur correspondant
          if (!emailSent) { // vérifiez si l'email n'a pas encore été envoyé
            // Recherchez toutes les commandes dont le statut est "Envoyer" et envoyez un email à l'utilisateur correspondant
            const commandesEnvoyees = this.commandes.filter(commande => commande.statusDto.libelle === 'Envoyer');
            if (commandesEnvoyees.length > 0) { // vérifiez s'il y a au moins une commande correspondante
              commandesEnvoyees.forEach(async (commande) => {
                const emailMessage: EmailMessage = {
                  to: this.user.email,
                  email: `Commande envoyée à votre adresse`,
                  subject: `Votre commande a été envoyée.`
                };
                await firstValueFrom(this.mailService.emailSending({ body: emailMessage }));
              });
              localStorage.setItem('emailSent', 'true'); // stockez l'information dans le stockage local du navigateur
            }
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  async back() {
    window.history.back();
  }

  private calculateCompletedSteps(commande: any): number {
    const libelle = commande.statusDto.libelle;
    let completedSteps = 0;

    if (libelle === 'Commande confirmé') {
      completedSteps = 1;
    } else if (libelle === 'En cours dimpression') {
      completedSteps = 2;
    } else if (libelle === 'Terminer') {
      completedSteps = 3;
    } else if (libelle === 'Envoyer' || libelle === 'Livrer') {
      completedSteps = 4;
    } else if (libelle === 'Livrer') {
      completedSteps = 5;
    }

    return completedSteps;
  }

  private calculateAllCompletedSteps() {
    this.commandes.forEach((commande) => {
      commande.completedSteps = this.calculateCompletedSteps(commande);
    });
  }

  private sortCommandesByCompletedSteps() {
    this.commandes.sort((a, b) => {
      return b.completedSteps - a.completedSteps;
    });
  }

}
