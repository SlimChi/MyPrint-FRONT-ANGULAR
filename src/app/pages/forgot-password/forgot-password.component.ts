import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ResetPassword} from "../../swagger/services/models/reset-password";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {AuthentificationService} from "../../swagger/services/services/authentification.service";



@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  resetPasssword: ResetPassword={email:''};
  errorMessages: Array<string> = [];
  errorMessage: Array<string> = [];

  constructor(
    private router: Router,
    private userService: AuthentificationService,
    private snackBar: MatSnackBar

  ) {

  }

  ngOnInit(): void {

  }

  forgotPassword() {
    this.errorMessages = [];

    this.userService.resetPasswordEmail({
      body: this.resetPasssword
    }).subscribe({
      next: async (data) => {
        await this.router.navigate(['response-password']);
        this.snackBar.open('Un email a été envoyé pour réinitialiser votre mot de passe', 'Fermer', {
          duration: 5000, // Durée de 5 secondes avant fermeture automatique
        });
      },
      error: (err: { error: { validationErrors: string[]; }; }) => {
        console.log(err);
        this.errorMessages = err.error.validationErrors;
        this.snackBar.open('Une erreur est survenue. Veuillez vérifier vos informations', 'Fermer', {
          duration: 5000, // Durée de 5 secondes avant fermeture automatique
        });
      }
    });
  }




  async cancel() {
    await this.router.navigate(['user/adresses']);
  }
}
