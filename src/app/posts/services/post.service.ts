import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostSerialization } from '../model/interface/post-serialization';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  base_url = "https://jsonplaceholder.typicode.com/posts/"

  constructor(private _http: HttpClient) { }

  getAllPosts(): Observable<PostSerialization[]>{
    return this._http.get<PostSerialization[]>(this.base_url)
  }

}
