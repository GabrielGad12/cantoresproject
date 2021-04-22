import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shounen',
  templateUrl: './melanie.component.html',
  styleUrls: ['./melanie.component.css']
})
export class MelanieComponent implements OnInit {
  melanie =[
    {
      
      nome: 'Play Date'
      
    },
    {
      
      nome: 'Mad Hatter'
   
    },
    {
      
      nome: 'Cry Baby'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

