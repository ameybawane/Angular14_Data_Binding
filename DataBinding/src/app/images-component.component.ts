import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html'
})
export class ImagesComponentComponent implements OnInit {

  images!: any[];
  imagePath!: any;

  constructor() { }

  ngOnInit(): void {
    this.images = [{
      id: 1, Name: "Captain America", path: "../assets/img/CaptainAmerica.jpg"
    },
    {
      id: 2, Name: "Dr. Strange", path: "../assets/img/DrStrange.jpg"
    },
    {
      id: 3, Name: "Iron Man", path: "../assets/img/IronMan.jpg"
    },
    ]
  }

}
