import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movieList : any []=[];
  constructor (private router:Router,private movieService:MovieService){}
  
  ngOnInit(): void {
    this.movieList=this.movieService.movieList;
  }

  moviePage(id:number):void{
    this.router.navigate(['/movie', id]);
  }
}
