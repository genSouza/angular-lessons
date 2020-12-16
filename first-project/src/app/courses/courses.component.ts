import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-component',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  portalName: string;
  courses: string[];
  constructor(private service: CoursesService) {
    this.portalName = 'http://loiane.trainnig';
    this.courses = service.getCourses();
  }

  ngOnInit(): void {}
}
