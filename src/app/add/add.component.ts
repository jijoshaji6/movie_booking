import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  constructor(private location:Location){}

  back(){
    this.location.back();
  }
}
