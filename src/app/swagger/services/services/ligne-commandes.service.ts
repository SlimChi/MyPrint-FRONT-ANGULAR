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

import { InsertLigneCommandeDto } from '../models/insert-ligne-commande-dto';
import { LigneCommandeDto } from '../models/ligne-commande-dto';

@Injectable({
  providedIn: 'root',
})
export class LigneCommandesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateStatus1
   */
  static readonly UpdateStatus1Path = '/lignecommandes/{numeroCommande}/{numeroLigneCommande}/{newIdStatus}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateStatus1()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatus1$Response(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
    newIdStatus: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LigneCommandeDto>> {

    const rb = new RequestBuilder(this.rootUrl, LigneCommandesService.UpdateStatus1Path, 'put');
    if (params) {
      rb.path('numeroCommande', params.numeroCommande, {});
      rb.path('numeroLigneCommande', params.numeroLigneCommande, {});
      rb.path('newIdStatus', params.newIdStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LigneCommandeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateStatus1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateStatus1(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
    newIdStatus: number;
  },
  context?: HttpContext

): Observable<LigneCommandeDto> {

    return this.updateStatus1$Response(params,context).pipe(
      map((r: StrictHttpResponse<LigneCommandeDto>) => r.body as LigneCommandeDto)
    );
  }

  /**
   * Path part for operation getAll1
   */
  static readonly GetAll1Path = '/lignecommandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LigneCommandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LigneCommandesService.GetAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LigneCommandeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<LigneCommandeDto>> {

    return this.getAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeDto>>) => r.body as Array<LigneCommandeDto>)
    );
  }

  /**
   * Path part for operation insert4
   */
  static readonly Insert4Path = '/lignecommandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert4$Response(params: {
    body: InsertLigneCommandeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LigneCommandeDto>> {

    const rb = new RequestBuilder(this.rootUrl, LigneCommandesService.Insert4Path, 'post');
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
        return r as StrictHttpResponse<LigneCommandeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `insert4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert4(params: {
    body: InsertLigneCommandeDto
  },
  context?: HttpContext

): Observable<LigneCommandeDto> {

    return this.insert4$Response(params,context).pipe(
      map((r: StrictHttpResponse<LigneCommandeDto>) => r.body as LigneCommandeDto)
    );
  }

  /**
   * Path part for operation getAllByNumeroCommande
   */
  static readonly GetAllByNumeroCommandePath = '/lignecommandes/{numeroCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllByNumeroCommande()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeroCommande$Response(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<LigneCommandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LigneCommandesService.GetAllByNumeroCommandePath, 'get');
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
        return r as StrictHttpResponse<Array<LigneCommandeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllByNumeroCommande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeroCommande(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<Array<LigneCommandeDto>> {

    return this.getAllByNumeroCommande$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<LigneCommandeDto>>) => r.body as Array<LigneCommandeDto>)
    );
  }

  /**
   * Path part for operation getByNumeros
   */
  static readonly GetByNumerosPath = '/lignecommandes/{numeroCommande}/{numeroLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getByNumeros()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByNumeros$Response(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<LigneCommandeDto>> {

    const rb = new RequestBuilder(this.rootUrl, LigneCommandesService.GetByNumerosPath, 'get');
    if (params) {
      rb.path('numeroCommande', params.numeroCommande, {});
      rb.path('numeroLigneCommande', params.numeroLigneCommande, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LigneCommandeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getByNumeros$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getByNumeros(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
  },
  context?: HttpContext

): Observable<LigneCommandeDto> {

    return this.getByNumeros$Response(params,context).pipe(
      map((r: StrictHttpResponse<LigneCommandeDto>) => r.body as LigneCommandeDto)
    );
  }

}
