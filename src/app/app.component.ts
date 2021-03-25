import { Component } from '@angular/core';
import {OmdbApiService} from './services/omdb-api.service';
import { IOMDBResponse } from './ombdresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {

movieData:IOMDBResponse;
errorMessage:any;

constructor(private _ombdService:OmdbApiService) { 
}

getMovieDetails(movieName:string) : boolean {
  this._ombdService.getMovieData(movieName).subscribe(
   movieData => {
      this.movieData=movieData;
    console.log('Director name:' + this.movieData.Director);
  },
  error => this.errorMessage = <any>error
);
  return false;
 }

}