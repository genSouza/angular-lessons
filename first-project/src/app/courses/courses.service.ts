import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return ['java', 'Ext js', 'Angular', 'Estrutura de dados'];
  }
}
