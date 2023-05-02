import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";

import {CookieService} from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {UtilisateursService} from "../../swagger/service/services/utilisateurs.service";


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private cookieName = 'myAppToken';
  private tokenUrl = 'https://api.braintreegateway.com/merchants/3fw8jj3xr2wj6cxz/token';

  constructor(private router: Router,
              private cookieService: CookieService,
              private userService: UtilisateursService,
              private http: HttpClient) {
  }
  private jwtHelper = new JwtHelperService();

  savetoken(token: string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['admin','user'])
  }

  public isLogged(): boolean {
    const token = localStorage.getItem('token')
    // console.log(token)
    return !!token
  }

  public clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  savetokenInCookie(token: string): void {
    document.cookie = `token=${token}`;
  }
  loadTokenFromCookie(): string {
    return this.cookieService.get(this.cookieName);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getUserInfo(): void {
    const token = this.getToken();
    const decodedToken = this.jwtHelper.decodeToken(token);
    const userId = decodedToken.sub;

    this.userService.getUtilisateurById(userId).subscribe(
      (user) => {
        // Store user info in a service or component
      },
      (error) => console.log(error)
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  sendPaymentNonce(nonce: string): Promise<any> {
    const headers = {
      'Content-Type': 'application/json'
    };
    const options = { headers: headers };
    const body = {
      paymentMethodNonce: nonce
    };
    return this.http.post(this.tokenUrl, body, options).toPromise();
  }
}
