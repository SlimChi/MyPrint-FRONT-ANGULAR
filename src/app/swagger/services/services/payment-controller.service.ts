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

import { ClientTokenDto } from '../models/client-token-dto';
import { PurchaseDto } from '../models/purchase-dto';
import { ResultTransaction } from '../models/result-transaction';

@Injectable({
  providedIn: 'root',
})
export class PaymentControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation checkOut
   */
  static readonly CheckOutPath = '/api/checkout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `checkOut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkOut$Response(params: {
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResultTransaction>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentControllerService.CheckOutPath, 'post');
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
        return r as StrictHttpResponse<ResultTransaction>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `checkOut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  checkOut(params: {
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<ResultTransaction> {

    return this.checkOut$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResultTransaction>) => r.body as ResultTransaction)
    );
  }

  /**
   * Path part for operation getToken
   */
  static readonly GetTokenPath = '/api/token';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToken$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ClientTokenDto>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentControllerService.GetTokenPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClientTokenDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToken(params?: {
  },
  context?: HttpContext

): Observable<ClientTokenDto> {

    return this.getToken$Response(params,context).pipe(
      map((r: StrictHttpResponse<ClientTokenDto>) => r.body as ClientTokenDto)
    );
  }

}
