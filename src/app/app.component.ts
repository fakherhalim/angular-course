import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  // startDate = new Date(2000, 0, 1);
  // title = COURSES[0].description;
  // price = 9.99;
  // rate=.67;
  // course = COURSES[0];

//@ViewChild is a template querying mechanism. It will return first matching element
  @ViewChild('cardRef1')
  card1: CourseCardComponent;
  @ViewChild('cardRef2')
  card2: CourseCardComponent;
  //ElementRef is a plain DOM element reference
  @ViewChild('container', {read: ElementRef})
  containerDiv: ElementRef;


  onCourseSelected(course: Course){
    // console.log("AppComponent clicked", course)
    console.log('containerDiv', this.card1);
  }
}
