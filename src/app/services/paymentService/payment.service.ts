import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, observable} from "rxjs";
import {PurchaseDto} from "./purchase-dto";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
backendUrl = environment.backendUrl

  constructor(private httpclient : HttpClient,

  ) {
  }

  public getToken(): Observable<any>{
    return this.httpclient.get<any>(this.backendUrl + 'token');
  }
  public checkOut(dto: PurchaseDto): Observable<any>{
  return this.httpclient.post<any>(this.backendUrl + 'checkout', dto)
  }
}
