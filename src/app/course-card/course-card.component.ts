import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;//it is defined with @input() decorator so that it could be passed on from container with a value
  @Input()
  cardIndex: number;

  
  @Output()
  courseSelected = new EventEmitter<Course>();//this must be decorated wiht @output() emitter.
  
  constructor() { 

  }
  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  ngOnInit(): void {
  }
  onCourseViewed(){
    console.log("CourseCardComponet cliked!");
    this.courseSelected.emit(this.course);
  }
}
