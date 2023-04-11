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

import { CategorieDto } from '../models/categorie-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCategorieById
   */
  static readonly GetCategorieByIdPath = '/categories/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategorieById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorieById$Response(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetCategorieByIdPath, 'get');
    if (params) {
      rb.path('idCategorie', params.idCategorie, {});
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
   * To access the full response (for headers, for example), `getCategorieById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategorieById(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getCategorieById$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation updateCategorie
   */
  static readonly UpdateCategoriePath = '/categories/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategorie()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategorie$Response(params: {
    idCategorie: number;
    body: CategorieDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.UpdateCategoriePath, 'put');
    if (params) {
      rb.path('idCategorie', params.idCategorie, {});
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
   * To access the full response (for headers, for example), `updateCategorie$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategorie(params: {
    idCategorie: number;
    body: CategorieDto
  },
  context?: HttpContext

): Observable<string> {

    return this.updateCategorie$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation deleteMapping
   */
  static readonly DeleteMappingPath = '/categories/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteMapping()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMapping$Response(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.DeleteMappingPath, 'delete');
    if (params) {
      rb.path('idCategorie', params.idCategorie, {});
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
   * To access the full response (for headers, for example), `deleteMapping$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMapping(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.deleteMapping$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation insertCategorie
   */
  static readonly InsertCategoriePath = '/categories/insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insertCategorie()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertCategorie$Response(params: {
    body: CategorieDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.InsertCategoriePath, 'post');
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
   * To access the full response (for headers, for example), `insertCategorie$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertCategorie(params: {
    body: CategorieDto
  },
  context?: HttpContext

): Observable<string> {

    return this.insertCategorie$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getCategories
   */
  static readonly GetCategoriesPath = '/categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetCategoriesPath, 'get');
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
   * To access the full response (for headers, for example), `getCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategories(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getCategories$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
