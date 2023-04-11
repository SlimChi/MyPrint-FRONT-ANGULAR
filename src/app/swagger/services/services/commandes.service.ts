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

import { InsertCommandeDto } from '../models/insert-commande-dto';

@Injectable({
  providedIn: 'root',
})
export class CommandesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateStatus2
   */
  static readonly UpdateStatus2Path = '/commandes/{numeroCommande}/{newIdStatus}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateStatus2()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatus2$Response(params: {
    numeroCommande: number;
    newIdStatus: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommandesService.UpdateStatus2Path, 'put');
    if (params) {
      rb.path('numeroCommande', params.numeroCommande, {});
      rb.path('newIdStatus', params.newIdStatus, {});
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
   * To access the full response (for headers, for example), `updateStatus2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatus2(params: {
    numeroCommande: number;
    newIdStatus: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.updateStatus2$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCommandes
   */
  static readonly GetCommandesPath = '/commandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandes$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommandesService.GetCommandesPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getCommandes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandes(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getCommandes$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation insert6
   */
  static readonly Insert6Path = '/commandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert6$Response(params: {
    body: InsertCommandeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommandesService.Insert6Path, 'post');
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `insert6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert6(params: {
    body: InsertCommandeDto
  },
  context?: HttpContext

): Observable<string> {

    return this.insert6$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCommandesByNumero
   */
  static readonly GetCommandesByNumeroPath = '/commandes/{numeroCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandesByNumero()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandesByNumero$Response(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommandesService.GetCommandesByNumeroPath, 'get');
    if (params) {
      rb.path('numeroCommande', params.numeroCommande, {});
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
   * To access the full response (for headers, for example), `getCommandesByNumero$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandesByNumero(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getCommandesByNumero$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCommandesByIdUser
   */
  static readonly GetCommandesByIdUserPath = '/commandes/utilisateur/{idUtilisateur}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommandesByIdUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandesByIdUser$Response(params: {
    idUtilisateur: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CommandesService.GetCommandesByIdUserPath, 'get');
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
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommandesByIdUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommandesByIdUser(params: {
    idUtilisateur: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getCommandesByIdUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
