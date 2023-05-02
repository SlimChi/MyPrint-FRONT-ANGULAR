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

import { AdresseDto } from '../models/adresse-dto';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateAdress
   */
  static readonly UpdateAdressPath = '/adresses/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAdress()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAdress$Response(params: {
    id: number;
    rue: string;
    complement: string;
    codePostal: string;
    ville: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.UpdateAdressPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('rue', params.rue, {});
      rb.query('complement', params.complement, {});
      rb.query('codePostal', params.codePostal, {});
      rb.query('ville', params.ville, {});
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
   * To access the full response (for headers, for example), `updateAdress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAdress(params: {
    id: number;
    rue: string;
    complement: string;
    codePostal: string;
    ville: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.updateAdress$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation save
   */
  static readonly SavePath = '/adresses/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save$Response(params: {
    body: AdresseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.SavePath, 'post');
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
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save(params: {
    body: AdresseDto
  },
  context?: HttpContext

): Observable<number> {

    return this.save$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation findById
   */
  static readonly FindByIdPath = '/adresses/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AdresseDto>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindByIdPath, 'get');
    if (params) {
      rb.path('address-id', params['address-id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdresseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<AdresseDto> {

    return this.findById$Response(params,context).pipe(
      map((r: StrictHttpResponse<AdresseDto>) => r.body as AdresseDto)
    );
  }

  /**
   * Path part for operation delete2
   */
  static readonly Delete2Path = '/adresses/{address-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.Delete2Path, 'delete');
    if (params) {
      rb.path('address-id', params['address-id'], {});
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
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: {
    'address-id': number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete2$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/adresses/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AdresseDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AddressService.FindAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdresseDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<AdresseDto>> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AdresseDto>>) => r.body as Array<AdresseDto>)
    );
  }

}
