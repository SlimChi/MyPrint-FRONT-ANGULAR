import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {NewPassword} from "../../swagger/services/models/new-password";
import {UtilisateursService} from "../../swagger/services/services/utilisateurs.service";
import {ToastrService} from "ngx-toastr";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TokenService} from "../../services/token-service/token.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  errorMessages: Array<string> = [];
  newPassword: NewPassword = {};
  token?: string;
  tokenUrl = '';
  successMsg = '';
  confirmPassword = '';
  showPassword = false;


  ngOnInit(): void {
    this.tokenUrl = this.route.snapshot.queryParams['token'];
    this.newPassword.tokenPassword = this.tokenUrl;
  }

  constructor(private auth: UtilisateursService,
              private route: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private tokenService: TokenService,
              private storageService: TokenService,
              ) {
  }



  resetPassword() {
    if (this.newPassword.password !== this.confirmPassword) {
      this.errorMessages.push("Les deux mots de passe ne sont pas identiques !");
      return;
    }
    this.auth.resetPassword({
      token: this.tokenUrl,
      body: this.newPassword
    }).subscribe({
      next: async (data) => {
        this.successMsg = 'Votre mot de passe a été mis à jour';
        const snackBarRef = this.snackBar.open('Mot de passe mis à jour', 'Fermer', { duration: 5000 });
        setTimeout(() => {
          snackBarRef.dismiss();
        }, 4000);
        this.tokenService.clearToken();
        await this.router.navigate(['login']);
      },
      error: (err: { error: { validationErrors: string[]; }; }) => {
        console.log(err);
        this.errorMessages = err.error.validationErrors;
        this.snackBar.open('Une erreur est survenue', 'Fermer');
      }
    });
  }


  toggleShowPasswordNewPassword() {
    this.showPassword = !this.showPassword;
  }
}
