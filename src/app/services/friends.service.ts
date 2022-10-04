import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<any> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/users')
  }
}
export class ProductsServices {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://api.escuelajs.co/api/v1/products')
  }
}
