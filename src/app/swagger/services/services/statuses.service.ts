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

import { StatusDto } from '../models/status-dto';

@Injectable({
  providedIn: 'root',
})
export class StatusesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getStatusById
   */
  static readonly GetStatusByIdPath = '/statuses/{idStatus}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStatusById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatusById$Response(params: {
    idStatus: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusesService.GetStatusByIdPath, 'get');
    if (params) {
      rb.path('idStatus', params.idStatus, {});
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
   * To access the full response (for headers, for example), `getStatusById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatusById(params: {
    idStatus: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getStatusById$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation updateStatus
   */
  static readonly UpdateStatusPath = '/statuses/{idStatus}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateStatus$Response(params: {
    idStatus: number;
    body: StatusDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusesService.UpdateStatusPath, 'put');
    if (params) {
      rb.path('idStatus', params.idStatus, {});
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
   * To access the full response (for headers, for example), `updateStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateStatus(params: {
    idStatus: number;
    body: StatusDto
  },
  context?: HttpContext

): Observable<string> {

    return this.updateStatus$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation deleteStatus
   */
  static readonly DeleteStatusPath = '/statuses/{idStatus}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStatus$Response(params: {
    idStatus: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusesService.DeleteStatusPath, 'delete');
    if (params) {
      rb.path('idStatus', params.idStatus, {});
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
   * To access the full response (for headers, for example), `deleteStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStatus(params: {
    idStatus: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.deleteStatus$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getStatuses
   */
  static readonly GetStatusesPath = '/statuses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStatuses()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatuses$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusesService.GetStatusesPath, 'get');
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
   * To access the full response (for headers, for example), `getStatuses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStatuses(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getStatuses$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation insertStatus
   */
  static readonly InsertStatusPath = '/statuses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `insertStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertStatus$Response(params: {
    body: StatusDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, StatusesService.InsertStatusPath, 'post');
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
   * To access the full response (for headers, for example), `insertStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  insertStatus(params: {
    body: StatusDto
  },
  context?: HttpContext

): Observable<string> {

    return this.insertStatus$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}
