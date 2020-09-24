import {Injectable} from '@angular/core';
import {MockSongs} from "../data/mock-songs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpAdapter {


  constructor(public http: HttpClient) {
  }

  get<T>(url: string): Promise<T> {
    console.log("get working");
    return this
      .http
      .get<T>(url)
      .toPromise()
  }
}
