import { Component } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  students: Student[] = [
    { id: 1, name: 'John Doe', age: 20, course: 'BSCS' },
    { id: 2, name: 'Jane Smith', age: 22, course: 'BSEMC' },
    { id: 3, name: 'Jim Beam', age: 21, course: 'BSIT' },
    { id: 4, name: 'Jack Daniels', age: 23, course: 'BSCS' }
  ];

  searchText: string = '';

  get filteredStudents(): Student[] {
    return this.students.filter(student =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
