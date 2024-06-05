import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit{
  movie:any;
  constructor(private movieService:MovieService,private route:ActivatedRoute, private router:Router){}
  
  ngOnInit(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.movie=this.movieService.getMovieById(id)
  }


  bookingPage(id:number):void{
    this.router.navigate(['/booking', id]);
  }
}
