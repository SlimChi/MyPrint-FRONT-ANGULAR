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

import { ResponseMessage } from '../models/response-message';

@Injectable({
  providedIn: 'root',
})
export class FichiersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFichiers
   */
  static readonly GetFichiersPath = '/fichiers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFichiers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFichiers$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, FichiersService.GetFichiersPath, 'get');
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
   * To access the full response (for headers, for example), `getFichiers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFichiers(params?: {
  },
  context?: HttpContext

): Observable<string> {

    return this.getFichiers$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation uploadFiles
   */
  static readonly UploadFilesPath = '/fichiers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFiles()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFiles$Response(params?: {
    body?: {
'file': Array<Blob>;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponseMessage>> {

    const rb = new RequestBuilder(this.rootUrl, FichiersService.UploadFilesPath, 'post');
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
        return r as StrictHttpResponse<ResponseMessage>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFiles$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadFiles(params?: {
    body?: {
'file': Array<Blob>;
}
  },
  context?: HttpContext

): Observable<ResponseMessage> {

    return this.uploadFiles$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponseMessage>) => r.body as ResponseMessage)
    );
  }

  /**
   * Path part for operation getFichierById
   */
  static readonly GetFichierByIdPath = '/fichiers/{idFichier}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFichierById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFichierById$Response(params: {
    idFichier: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, FichiersService.GetFichierByIdPath, 'get');
    if (params) {
      rb.path('idFichier', params.idFichier, {});
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
   * To access the full response (for headers, for example), `getFichierById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFichierById(params: {
    idFichier: number;
  },
  context?: HttpContext

): Observable<string> {

    return this.getFichierById$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getFile
   */
  static readonly GetFilePath = '/fichiers/{idFichier}/download';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFile$Response(params: {
    idFichier: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, FichiersService.GetFilePath, 'get');
    if (params) {
      rb.path('idFichier', params.idFichier, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFile(params: {
    idFichier: number;
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.getFile$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
