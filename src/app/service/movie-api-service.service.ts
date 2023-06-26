import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private _http: HttpClient) { }

  baseurl : string = "https://api.themoviedb.org/3";
  apiKey: string = "b2f1213e341917644231264d30d8845b";

  // https://api.themoviedb.org/3/trending/all/week?api_key=b2f1213e341917644231264d30d8845b

  //bannerapidata
  bannerApiData(): Observable<any> {
    return this._http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`)
   // return this._http.get("https://api.themoviedb.org/3/movie/550?api_key=b2f1213e341917644231264d30d8845b");
  }

  // trending movie api data
  trendingMovieApiData(): Observable<any> {
    return this._http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`);
  }
}
