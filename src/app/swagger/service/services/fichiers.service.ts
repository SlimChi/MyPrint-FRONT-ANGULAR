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

import { Fichier } from '../models/fichier';
import { FichierDto } from '../models/fichier-dto';
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

): Observable<StrictHttpResponse<Array<FichierDto>>> {

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
        return r as StrictHttpResponse<Array<FichierDto>>;
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

): Observable<Array<FichierDto>> {

    return this.getFichiers$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FichierDto>>) => r.body as Array<FichierDto>)
    );
  }

  /**
   * Path part for operation upload
   */
  static readonly UploadPath = '/fichiers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `upload()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  upload$Response(params?: {
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Fichier>> {

    const rb = new RequestBuilder(this.rootUrl, FichiersService.UploadPath, 'post');
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
        return r as StrictHttpResponse<Fichier>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `upload$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  upload(params?: {
    body?: {
'file': Blob;
}
  },
  context?: HttpContext

): Observable<Fichier> {

    return this.upload$Response(params,context).pipe(
      map((r: StrictHttpResponse<Fichier>) => r.body as Fichier)
    );
  }

  /**
   * Path part for operation uploadFiles
   */
  static readonly UploadFilesPath = '/fichiers/uploadFiles';

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

): Observable<StrictHttpResponse<FichierDto>> {

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
        return r as StrictHttpResponse<FichierDto>;
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

): Observable<FichierDto> {

    return this.getFichierById$Response(params,context).pipe(
      map((r: StrictHttpResponse<FichierDto>) => r.body as FichierDto)
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
