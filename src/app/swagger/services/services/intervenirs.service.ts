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

import { InsertIntervenirDto } from '../models/insert-intervenir-dto';

@Injectable({
  providedIn: 'root',
})
export class IntervenirsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAll2
   */
  static readonly GetAll2Path = '/intervenirs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll2$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenirsService.GetAll2Path, 'get');
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
   * To access the full response (for headers, for example), `getAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAll2(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getAll2$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation insert5
   */
  static readonly Insert5Path = '/intervenirs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert5$Response(params: {
    body: InsertIntervenirDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenirsService.Insert5Path, 'post');
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
   * To access the full response (for headers, for example), `insert5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert5(params: {
    body: InsertIntervenirDto
  },
  context?: HttpContext

): Observable<string> {

    return this.insert5$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getAllByNumeroCommande1
   */
  static readonly GetAllByNumeroCommande1Path = '/intervenirs/{numeroCommande}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllByNumeroCommande1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeroCommande1$Response(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, IntervenirsService.GetAllByNumeroCommande1Path, 'get');
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
   * To access the full response (for headers, for example), `getAllByNumeroCommande1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllByNumeroCommande1(params: {
    numeroCommande: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getAllByNumeroCommande1$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
