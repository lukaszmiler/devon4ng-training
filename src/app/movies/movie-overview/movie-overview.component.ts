import { Component, Injectable } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent {

  constructor(private movieService: MovieService) {}


  movies: Movie[] = []
  selectedMovie: Movie

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie
  }

  onMovieUpdated(updatedMovie: Movie): void {
    this.movieService.save(updatedMovie)
  }

  onCreateMovie(): void {
    this.selectedMovie = {
      id: this.movies.length + 1,
      directors: null,
      title: null,
      description: null,
      year: null
    }
  }

  ngOnInit(): void {

    this.movies = this.movieService.findAll()

    // this.movies.push({
    //   id: 1,
    //   directors: "Francis Ford Coppola",
    //   title: "The Godfather",
    //   description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    //   year: 1972
    // })

    // this.movies.push({
    //   id: 2,
    //   directors: "James Cameron",
    //   title: "Avatar",
    //   description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    //   year: 2009
    // })

    // this.movies.push({
    //   id: 3,
    //   directors: "Frank Darabont",
    //   title: "The Shawshank Redemption",
    //   description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    //   year: 1994
    // })

    // this.movies.push({
    //   id: 4,
    //   directors: "Sidney Lumet",
    //   title: "12 Angry Men",
    //   description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    //   year: 1957
    // })

    // this.movies.push({
    //   id: 5,
    //   directors: "Quentin Tarantino",
    //   title: "Pulp Fiction",
    //   description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    //   year: 1994
    // })

    // this.movies.push({
    //   id: 6,
    //   directors: "Christopher Nolan",
    //   title: "The Dark Knight",
    //   description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    //   year: 2008
    // })

  }
}