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

import { OptionLigneCommandeDto } from '../models/option-ligne-commande-dto';
import { TypeOptionDto } from '../models/type-option-dto';

@Injectable({
  providedIn: 'root',
})
export class OptionLigneCommandesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllByNumeros
   */
  static readonly GetAllByNumerosPath = '/optionlignecommandes/{numeroCommande}/{numeroLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllByNumeros()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeros$Response(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionLigneCommandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionLigneCommandesService.GetAllByNumerosPath, 'get');
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
        return r as StrictHttpResponse<Array<OptionLigneCommandeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllByNumeros$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeros(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
  },
  context?: HttpContext

): Observable<Array<OptionLigneCommandeDto>> {

    return this.getAllByNumeros$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionLigneCommandeDto>>) => r.body as Array<OptionLigneCommandeDto>)
    );
  }

  /**
   * Path part for operation updateTypeOptions
   */
  static readonly UpdateTypeOptionsPath = '/optionlignecommandes/{numeroCommande}/{numeroLigneCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTypeOptions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTypeOptions$Response(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
    body: Array<TypeOptionDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionLigneCommandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionLigneCommandesService.UpdateTypeOptionsPath, 'put');
    if (params) {
      rb.path('numeroCommande', params.numeroCommande, {});
      rb.path('numeroLigneCommande', params.numeroLigneCommande, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OptionLigneCommandeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTypeOptions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTypeOptions(params: {
    numeroCommande: number;
    numeroLigneCommande: number;
    body: Array<TypeOptionDto>
  },
  context?: HttpContext

): Observable<Array<OptionLigneCommandeDto>> {

    return this.updateTypeOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionLigneCommandeDto>>) => r.body as Array<OptionLigneCommandeDto>)
    );
  }

  /**
   * Path part for operation getAll
   */
  static readonly GetAllPath = '/optionlignecommandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionLigneCommandeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionLigneCommandesService.GetAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OptionLigneCommandeDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll(params?: {
  },
  context?: HttpContext

): Observable<Array<OptionLigneCommandeDto>> {

    return this.getAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionLigneCommandeDto>>) => r.body as Array<OptionLigneCommandeDto>)
    );
  }

  /**
   * Path part for operation insert2
   */
  static readonly Insert2Path = '/optionlignecommandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert2$Response(params: {
    body: OptionLigneCommandeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OptionLigneCommandeDto>> {

    const rb = new RequestBuilder(this.rootUrl, OptionLigneCommandesService.Insert2Path, 'post');
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
        return r as StrictHttpResponse<OptionLigneCommandeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `insert2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert2(params: {
    body: OptionLigneCommandeDto
  },
  context?: HttpContext

): Observable<OptionLigneCommandeDto> {

    return this.insert2$Response(params,context).pipe(
      map((r: StrictHttpResponse<OptionLigneCommandeDto>) => r.body as OptionLigneCommandeDto)
    );
  }

  /**
   * Path part for operation delete
   */
  static readonly DeletePath = '/optionlignecommandes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  delete$Response(params: {
    body: OptionLigneCommandeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OptionLigneCommandesService.DeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  delete(params: {
    body: OptionLigneCommandeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.delete$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
