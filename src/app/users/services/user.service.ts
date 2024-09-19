import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSerialization } from '../models/interfaces/user-serialization';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url = "https://jsonplaceholder.typicode.com/users/"

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<UserSerialization[]>{
    return this._http.get<UserSerialization[]>(this.base_url)
  }

  getUser(id: number): Observable<UserSerialization>{
    return this._http.get<UserSerialization>(this.base_url + id + "/")
  }

}
