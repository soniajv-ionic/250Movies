import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMovie } from '../interfaces/imovie';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  static URL = 'https://fpaniaguajavascript.github.io/movies-250.json';
  private movies: IMovie[] = [];//Forma parte de la solución 'fácil'
  private httpClient = inject(HttpClient);

  //***Solución 'fácil'.***
  constructor() {
    this.httpClient.get(MoviesManagerService.URL).subscribe(
      ((data: IMovie[] | any) => {
        data.movies.forEach((movie: IMovie) => {
          this.movies.push(movie);
        });
      }));
  }

  getMovies() {
    console.log(this.movies);
    return this.movies;
  }
  //***Fin de solución 'fácil'***

  //***Solución 'difícil'***
  /*
  constructor() {
  }

  getMovies(): Observable<IMovie[]> {
    return this.httpClient.get<{ movies: IMovie[] }>(MoviesManagerService.URL).pipe(
      map(response => response.movies)
    );
  }
  */
  //***Fin de solución 'difícil'***
}