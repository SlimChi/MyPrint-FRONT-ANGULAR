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

import { TypeOptionDto } from '../models/type-option-dto';

@Injectable({
  providedIn: 'root',
})
export class TypeOptionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTypeOptionsById
   */
  static readonly GetTypeOptionsByIdPath = '/typeoptions/{idOption}/{idTypeOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTypeOptionsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeOptionsById$Response(params: {
    idOption: number;
    idTypeOption: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TypeOptionsService.GetTypeOptionsByIdPath, 'get');
    if (params) {
      rb.path('idOption', params.idOption, {});
      rb.path('idTypeOption', params.idTypeOption, {});
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
   * To access the full response (for headers, for example), `getTypeOptionsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeOptionsById(params: {
    idOption: number;
    idTypeOption: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getTypeOptionsById$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation update
   */
  static readonly UpdatePath = '/typeoptions/{idOption}/{idTypeOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: {
    idOption: number;
    idTypeOption: number;
    body: TypeOptionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TypeOptionsService.UpdatePath, 'put');
    if (params) {
      rb.path('idOption', params.idOption, {});
      rb.path('idTypeOption', params.idTypeOption, {});
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
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: {
    idOption: number;
    idTypeOption: number;
    body: TypeOptionDto
  },
  context?: HttpContext

): Observable<string> {

    return this.update$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation deleteById
   */
  static readonly DeleteByIdPath = '/typeoptions/{idOption}/{idTypeOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    idOption: number;
    idTypeOption: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TypeOptionsService.DeleteByIdPath, 'delete');
    if (params) {
      rb.path('idOption', params.idOption, {});
      rb.path('idTypeOption', params.idTypeOption, {});
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
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    idOption: number;
    idTypeOption: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.deleteById$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getTypeOptions
   */
  static readonly GetTypeOptionsPath = '/typeoptions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTypeOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeOptions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TypeOptionsService.GetTypeOptionsPath, 'get');
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
   * To access the full response (for headers, for example), `getTypeOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTypeOptions(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getTypeOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation insert
   */
  static readonly InsertPath = '/typeoptions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert$Response(params: {
    body: TypeOptionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TypeOptionsService.InsertPath, 'post');
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
   * To access the full response (for headers, for example), `insert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert(params: {
    body: TypeOptionDto
  },
  context?: HttpContext

): Observable<string> {

    return this.insert$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
