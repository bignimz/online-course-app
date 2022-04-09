import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'White Fox Academy';
  links = [
    { path: '/home', icon: 'home', title: 'Home'},
    { path: '/courses', icon: 'view_list', title: 'Courses'}
  ];

  constructor() {}
}
