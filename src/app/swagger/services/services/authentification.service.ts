/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AccountResponse } from '../models/account-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { NewPassword } from '../models/new-password';
import { RegisterRequest } from '../models/register-request';
import { ResetPassword } from '../models/reset-password';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation resetPassword
   */
  static readonly ResetPasswordPath = '/auth/resetPassword/{token}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword$Response(params: {
    token: string;
    body: NewPassword
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AccountResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.ResetPasswordPath, 'post');
    if (params) {
      rb.path('token', params.token, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPassword(params: {
    token: string;
    body: NewPassword
  },
  context?: HttpContext

): Observable<AccountResponse> {

    return this.resetPassword$Response(params,context).pipe(
      map((r: StrictHttpResponse<AccountResponse>) => r.body as AccountResponse)
    );
  }

  /**
   * Path part for operation registerUser
   */
  static readonly RegisterUserPath = '/auth/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser$Response(params: {
    body: RegisterRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthenticationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.RegisterUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerUser(params: {
    body: RegisterRequest
  },
  context?: HttpContext

): Observable<AuthenticationResponse> {

    return this.registerUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>) => r.body as AuthenticationResponse)
    );
  }

  /**
   * Path part for operation registerAdmin
   */
  static readonly RegisterAdminPath = '/auth/register/admin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdmin$Response(params: {
    body: RegisterRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthenticationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.RegisterAdminPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerAdmin(params: {
    body: RegisterRequest
  },
  context?: HttpContext

): Observable<AuthenticationResponse> {

    return this.registerAdmin$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>) => r.body as AuthenticationResponse)
    );
  }

  /**
   * Path part for operation resetPasswordEmail
   */
  static readonly ResetPasswordEmailPath = '/auth/checkEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetPasswordEmail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordEmail$Response(params: {
    body: ResetPassword
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AccountResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.ResetPasswordEmailPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AccountResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetPasswordEmail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  resetPasswordEmail(params: {
    body: ResetPassword
  },
  context?: HttpContext

): Observable<AccountResponse> {

    return this.resetPasswordEmail$Response(params,context).pipe(
      map((r: StrictHttpResponse<AccountResponse>) => r.body as AccountResponse)
    );
  }

  /**
   * Path part for operation authenticate
   */
  static readonly AuthenticatePath = '/auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: {
    body: AuthenticationRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AuthenticationResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.AuthenticatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: {
    body: AuthenticationRequest
  },
  context?: HttpContext

): Observable<AuthenticationResponse> {

    return this.authenticate$Response(params,context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>) => r.body as AuthenticationResponse)
    );
  }

  /**
   * Path part for operation confirm
   */
  static readonly ConfirmPath = '/auth/confirm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirm()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm$Response(params: {
    token: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthentificationService.ConfirmPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirm(params: {
    token: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.confirm$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
