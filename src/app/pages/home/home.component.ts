import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 constructor(private _service : MovieApiServiceService){}
 bannerResult: any=[];
 trendingMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();

  }

  bannerData(){
    this._service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    })
  }

  trendingData() {
    this._service.trendingMovieApiData().subscribe((result) => {
      console.log(result, "trendingResult#");
      this.trendingMovieResult = result.results;
    });
  }
}
