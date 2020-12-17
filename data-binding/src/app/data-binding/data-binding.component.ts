import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  name: string = 'abc';
  person: any = {
    name: 'def',
    age: 20,
  };
  url: string = 'http://loiane.training.com';
  angularCourse: boolean = true;
  imageUrl: string = 'http://lorempixel.com/400/200/nature/';
  getValor() {
    return 1;
  }

  nomeDoCurso: string = 'Angular';
  valorInicial = 25;

  onMudouValor(evento: any) {
    console.log(evento);
  }

  getLikeCourse() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
