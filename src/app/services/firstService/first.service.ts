import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "../../swagger/services/models/user-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  private readonly apiUrl = 'http://localhost:9090/users';

  constructor(private http: HttpClient) { }

  getUserById(userId: number): Observable<UserDto> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<UserDto>(url);
  }
}
