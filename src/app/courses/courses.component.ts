import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Hard Parts',
      description: 'Learn the fundamentals of Javascript like a pro!',
      percentComplete: 45,
      favorite: true
    },
    {
      id: 3,
      title: 'The Hard Parts of Servers & Node.js',
      description: 'Uncover the most challenging, yet most powerful features in Node.js, ',
      percentComplete: 45,
      favorite: true
    },
    {
      id: 4,
      title: 'JavaScript The Hard Parts',
      description: 'Learn the fundamentals of Javascript like a pro!',
      percentComplete: 45,
      favorite: true
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse: any;

  selectCourse(course: any){
    this.selectedCourse = course;
  }

  deleteCourse(courseId: number){
    console.log('DELETE COURSE', courseId);
    
  }

}
