import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieOverviewComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    MovieOverviewComponent
  ]
})
export class MoviesModule { }
