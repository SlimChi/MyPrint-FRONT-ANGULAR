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

import { OptionCategorieDto } from '../models/option-categorie-dto';
import { TypeOptionDto } from '../models/type-option-dto';

@Injectable({
  providedIn: 'root',
})
export class OptionCategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOptionsCategoriesByIdCategorie
   */
  static readonly GetOptionsCategoriesByIdCategoriePath = '/optioncategories/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionsCategoriesByIdCategorie()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsCategoriesByIdCategorie$Response(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionCategorieDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionCategoriesService.GetOptionsCategoriesByIdCategoriePath, 'get');
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
        return r as StrictHttpResponse<Array<OptionCategorieDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionsCategoriesByIdCategorie$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsCategoriesByIdCategorie(params: {
    idCategorie: number;
  },
  context?: HttpContext

): Observable<Array<OptionCategorieDto>> {

    return this.getOptionsCategoriesByIdCategorie$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionCategorieDto>>) => r.body as Array<OptionCategorieDto>)
    );
  }

  /**
   * Path part for operation updateOptions
   */
  static readonly UpdateOptionsPath = '/optioncategories/{idCategorie}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOptions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOptions$Response(params: {
    idCategorie: number;
    body: Array<TypeOptionDto>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionCategorieDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionCategoriesService.UpdateOptionsPath, 'put');
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
        return r as StrictHttpResponse<Array<OptionCategorieDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOptions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOptions(params: {
    idCategorie: number;
    body: Array<TypeOptionDto>
  },
  context?: HttpContext

): Observable<Array<OptionCategorieDto>> {

    return this.updateOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionCategorieDto>>) => r.body as Array<OptionCategorieDto>)
    );
  }

  /**
   * Path part for operation getOptionsCategories
   */
  static readonly GetOptionsCategoriesPath = '/optioncategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionsCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsCategories$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionCategorieDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionCategoriesService.GetOptionsCategoriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OptionCategorieDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionsCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsCategories(params?: {
  },
  context?: HttpContext

): Observable<Array<OptionCategorieDto>> {

    return this.getOptionsCategories$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionCategorieDto>>) => r.body as Array<OptionCategorieDto>)
    );
  }

  /**
   * Path part for operation insert3
   */
  static readonly Insert3Path = '/optioncategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert3$Response(params: {
    body: OptionCategorieDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OptionCategorieDto>> {

    const rb = new RequestBuilder(this.rootUrl, OptionCategoriesService.Insert3Path, 'post');
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
        return r as StrictHttpResponse<OptionCategorieDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `insert3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert3(params: {
    body: OptionCategorieDto
  },
  context?: HttpContext

): Observable<OptionCategorieDto> {

    return this.insert3$Response(params,context).pipe(
      map((r: StrictHttpResponse<OptionCategorieDto>) => r.body as OptionCategorieDto)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/optioncategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  delete1$Response(params: {
    body: OptionCategorieDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OptionCategoriesService.Delete1Path, 'delete');
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
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  delete1(params: {
    body: OptionCategorieDto
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
