import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lana',
  templateUrl: './lana.component.html',
  styleUrls: ['./lana.component.css']
})
export class LanaComponent implements OnInit {
  lana =[
    {
    
      nome: 'Summertime Sadness'
     
    },
    {
      
      nome: 'Video Games'
      
    },
    {
  
      nome: 'White Dress'
    }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
