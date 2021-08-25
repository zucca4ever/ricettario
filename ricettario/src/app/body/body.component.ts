import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  ricette: any;

  constructor() { }

  ngOnInit(): void {
    this.ricette=[
      {
        nome: "pasta al pesto",
      },
      {
        nome: "pasta al pomodoro",
      },
      {
        nome: "pasta al pollo",
      }
    ];
  }

  elimina(){
    console.log('eliminata');
  }

}
