import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ShowHide: boolean=false;
  HideShow(){
    this.ShowHide=!this.ShowHide
  }

  // Show: boolean=false;
  // ShowMe(){
  //   this.Show=!this.Show;
  // }

}
