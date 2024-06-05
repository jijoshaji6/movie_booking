import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  buttonText = "Disable";
  movieList:any []=[];
  constructor(private movieService:MovieService,private router:Router){}

  ngOnInit(): void {
    this.movieList=this.movieService.movieList;
  }

  editPage(id:number):void{
    this.router.navigate(['/edit',id])
  }

  changeButton(){
    this.buttonText='Enable';
  }
}
