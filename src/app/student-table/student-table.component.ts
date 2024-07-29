import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, course: 'Computer Science', level: 'First Year' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'Information Technology', level: 'Second Year' },
    { id: 3, name: 'Jim Beam', age: 21, course: 'ACT', level: 'Second Year' },
    { id: 4, name: 'Jack Daniels', age: 23, course: 'Computer Science', level: 'Fourth Year' }
  ];

  searchText: string = '';
  selectedCourse: string = '';
  selectedYearLevel: string = '';

  courses: string[] = ['Computer Science', 'Information Technology', 'ACT'];
  yearLevels: string[] = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  get filteredStudents(): Student[] {
    return this.students.filter(student =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedCourse === '' || student.course === this.selectedCourse) &&
      (this.selectedYearLevel === '' || student.level === this.selectedYearLevel)
    );
  }
}
