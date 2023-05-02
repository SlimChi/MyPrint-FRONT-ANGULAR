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

import { OptionDto } from '../models/option-dto';

@Injectable({
  providedIn: 'root',
})
export class OptionsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOptionsById
   */
  static readonly GetOptionsByIdPath = '/options/{idOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptionsById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsById$Response(params: {
    idOption: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OptionDto>> {

    const rb = new RequestBuilder(this.rootUrl, OptionsService.GetOptionsByIdPath, 'get');
    if (params) {
      rb.path('idOption', params.idOption, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OptionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptionsById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptionsById(params: {
    idOption: number;
  },
  context?: HttpContext

): Observable<OptionDto> {

    return this.getOptionsById$Response(params,context).pipe(
      map((r: StrictHttpResponse<OptionDto>) => r.body as OptionDto)
    );
  }

  /**
   * Path part for operation update1
   */
  static readonly Update1Path = '/options/{idOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: {
    idOption: number;
    body: OptionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OptionDto>> {

    const rb = new RequestBuilder(this.rootUrl, OptionsService.Update1Path, 'put');
    if (params) {
      rb.path('idOption', params.idOption, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OptionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: {
    idOption: number;
    body: OptionDto
  },
  context?: HttpContext

): Observable<OptionDto> {

    return this.update1$Response(params,context).pipe(
      map((r: StrictHttpResponse<OptionDto>) => r.body as OptionDto)
    );
  }

  /**
   * Path part for operation deleteById1
   */
  static readonly DeleteById1Path = '/options/{idOption}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById1$Response(params: {
    idOption: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, OptionsService.DeleteById1Path, 'delete');
    if (params) {
      rb.path('idOption', params.idOption, {});
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
   * To access the full response (for headers, for example), `deleteById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById1(params: {
    idOption: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getOptions
   */
  static readonly GetOptionsPath = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOptions()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptions$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OptionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, OptionsService.GetOptionsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OptionDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOptions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOptions(params?: {
  },
  context?: HttpContext

): Observable<Array<OptionDto>> {

    return this.getOptions$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OptionDto>>) => r.body as Array<OptionDto>)
    );
  }

  /**
   * Path part for operation insert1
   */
  static readonly Insert1Path = '/options';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insert1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert1$Response(params: {
    body: OptionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<OptionDto>> {

    const rb = new RequestBuilder(this.rootUrl, OptionsService.Insert1Path, 'post');
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
        return r as StrictHttpResponse<OptionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `insert1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insert1(params: {
    body: OptionDto
  },
  context?: HttpContext

): Observable<OptionDto> {

    return this.insert1$Response(params,context).pipe(
      map((r: StrictHttpResponse<OptionDto>) => r.body as OptionDto)
    );
  }

}
