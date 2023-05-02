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

import { AdresseDto } from '../models/adresse-dto';
import { InsertUtilisateurDto } from '../models/insert-utilisateur-dto';
import { PasswordDto } from '../models/password-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';

@Injectable({
  providedIn: 'root',
})
export class UtilisateursService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updatePasswordUtilisateurById
   */
  static readonly UpdatePasswordUtilisateurByIdPath = '/utilisateurs/{idUtilisateur}/updatepassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePasswordUtilisateurById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePasswordUtilisateurById$Response(params: {
    idUtilisateur: number;
    body: PasswordDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.UpdatePasswordUtilisateurByIdPath, 'put');
    if (params) {
      rb.path('idUtilisateur', params.idUtilisateur, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePasswordUtilisateurById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePasswordUtilisateurById(params: {
    idUtilisateur: number;
    body: PasswordDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.updatePasswordUtilisateurById$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation updateUtilisateurById
   */
  static readonly UpdateUtilisateurByIdPath = '/utilisateurs/{idUtilisateur}/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUtilisateurById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUtilisateurById$Response(params: {
    idUtilisateur: number;
    body: InsertUtilisateurDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.UpdateUtilisateurByIdPath, 'put');
    if (params) {
      rb.path('idUtilisateur', params.idUtilisateur, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUtilisateurById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUtilisateurById(params: {
    idUtilisateur: number;
    body: InsertUtilisateurDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.updateUtilisateurById$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/utilisateurs/UpdateUserById/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUser$Response(params: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.UpdateUserPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('email', params.email, {});
      rb.query('telephone', params.telephone, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateUser(params: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addAdresseToUser
   */
  static readonly AddAdresseToUserPath = '/utilisateurs/{id}/addAdresseToUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addAdresseToUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAdresseToUser$Response(params: {
    body: AdresseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.AddAdresseToUserPath, 'post');
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
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addAdresseToUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addAdresseToUser(params: {
    body: AdresseDto
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.addAdresseToUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation getUtilisateurs
   */
  static readonly GetUtilisateursPath = '/utilisateurs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtilisateurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateurs$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.GetUtilisateursPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtilisateurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateurs(params?: {
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.getUtilisateurs$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation getUtilisateurById
   */
  static readonly GetUtilisateurByIdPath = '/utilisateurs/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUtilisateurById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateurById$Response(params: {
    idUtilisateur: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<UtilisateurDto>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.GetUtilisateurByIdPath, 'get');
    if (params) {
      rb.path('idUtilisateur', params.idUtilisateur, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UtilisateurDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUtilisateurById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUtilisateurById(params: {
    idUtilisateur: number;
  },
  context?: HttpContext

): Observable<UtilisateurDto> {

    return this.getUtilisateurById$Response(params,context).pipe(
      map((r: StrictHttpResponse<UtilisateurDto>) => r.body as UtilisateurDto)
    );
  }

  /**
   * Path part for operation findAll
   */
  static readonly FindAllPath = '/utilisateurs/findall';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.FindAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: {
  },
  context?: HttpContext

): Observable<Array<UtilisateurDto>> {

    return this.findAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<UtilisateurDto>>) => r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Path part for operation deleteUserAndAddresses
   */
  static readonly DeleteUserAndAddressesPath = '/utilisateurs/users/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserAndAddresses()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserAndAddresses$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.DeleteUserAndAddressesPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUserAndAddresses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserAndAddresses(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteUserAndAddresses$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
