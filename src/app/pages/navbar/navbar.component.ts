import {Component, DoCheck, OnInit} from '@angular/core';
import {TokenService} from "../../services/token-service/token.service";
import {Router} from "@angular/router";
import {StorageService} from "../../services/clearStorage/storage.service";
import {HelperService} from "../../services/helper/helper.service";
import {JwtHelperService} from "@auth0/angular-jwt";



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{

  loggedInUserName: string | undefined = undefined;
  userRole: boolean = false;
  adminRole: boolean = false;
  currentLang: string = "fr"; // default language
  constructor(
    private tokenService: TokenService,
    private storageService: StorageService,
    private helperService: HelperService,
    private router: Router,

  ) {   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = new JwtHelperService().decodeToken(token);
      this.userRole = decodedToken.authorities[0].authority === 'USER';
      this.adminRole = decodedToken.authorities[0].authority === 'ADMIN';
      this.loggedInUserName = this.getLoggedInUserName(decodedToken);
    }
    this.tokenService.getToken();
  }

  private getLoggedInUserName(decodedToken: any): string {
    const authority = decodedToken.authorities[0].authority;
    switch (authority) {
      case 'USER':
        return 'Utilisateur';
      case 'ADMIN':
        return 'Administrateur';
      default:
        return '';
    }
  }


  logout(): void {
    this.tokenService.clearToken();
    this.storageService.clear();
    this.router.navigateByUrl('/login');
  }

  isLogout = false;

  ngDoCheck(): void {
    const url = this.router.url;
    this.isLogout = !(url === '/login' || url === '/register' || url === '/home' || url === '/commande' || url === '/forgot-password');
  }

  isAuthenticated(): boolean {
    return this.tokenService.isLogged();
  }

}
