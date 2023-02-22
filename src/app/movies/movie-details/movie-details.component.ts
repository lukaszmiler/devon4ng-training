import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent {

  @Output()
  movieUpdate : EventEmitter<Movie> = new EventEmitter()

  @Output()
  movieCreate : EventEmitter<Movie> = new EventEmitter()

  private _movie: Movie

  apply(): void {
    this.movieUpdate.emit({...this._movie})
  }

  create(): void{
    this.movieCreate.emit({...this._movie})
  }

  get movie(): Movie {
    return this._movie
  }

  @Input()
  set movie(movie: Movie) {
    this._movie = {...movie}
  }
}