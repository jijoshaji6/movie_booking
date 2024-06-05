import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  movie:any ;
  constructor( private location:Location,private movieService:MovieService,private route:ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.movie = this.movieService.getMovieById(id)
  }

  back(){
    this.location.back();
  }
}
