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

): Observable<StrictHttpResponse<CategorieDto>> {

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
        return r as StrictHttpResponse<CategorieDto>;
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

): Observable<CategorieDto> {

    return this.getCategorieById$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDto>) => r.body as CategorieDto)
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

): Observable<StrictHttpResponse<CategorieDto>> {

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
        return r as StrictHttpResponse<CategorieDto>;
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

): Observable<CategorieDto> {

    return this.updateCategorie$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDto>) => r.body as CategorieDto)
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

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.DeleteMappingPath, 'delete');
    if (params) {
      rb.path('idCategorie', params.idCategorie, {});
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
   * To access the full response (for headers, for example), `deleteMapping$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteMapping(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteMapping$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
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

): Observable<StrictHttpResponse<Array<CategorieDto>>> {

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
        return r as StrictHttpResponse<Array<CategorieDto>>;
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

): Observable<Array<CategorieDto>> {

    return this.getCategories$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<CategorieDto>>) => r.body as Array<CategorieDto>)
    );
  }

  /**
   * Path part for operation insertCategorie
   */
  static readonly InsertCategoriePath = '/categories';

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

): Observable<StrictHttpResponse<CategorieDto>> {

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
        return r as StrictHttpResponse<CategorieDto>;
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

): Observable<CategorieDto> {

    return this.insertCategorie$Response(params,context).pipe(
      map((r: StrictHttpResponse<CategorieDto>) => r.body as CategorieDto)
    );
  }

}
