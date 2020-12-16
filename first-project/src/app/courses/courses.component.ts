import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-component',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  portalName: string;
  courses: string[] = ['java', 'Ext js', 'Angular'];
  constructor() {
    this.portalName = 'http://loiane.trainnig';
  }

  ngOnInit(): void {}
}
