import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
  movie:any;
  selectedTIme:string = '';
  selectedDate:string='';
  constructor(private router:Router, private movieService:MovieService,private route:ActivatedRoute,private location:Location){}

  ngOnInit(): void{
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.movie=this.movieService.getMovieById(id)
  }

  selectTime(time:string){
    this.selectedTIme=time;
  }
  selectDate(date:string){
    this.selectedDate=date;
  }

  back(){
    this.location.back();
  }
}
