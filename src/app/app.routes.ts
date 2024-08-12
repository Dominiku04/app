import { Routes } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentTableComponent } from './student-table/student-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch: 'full'
  },
  {
    path:'student-dialog',
    component: StudentDialogComponent
  },
  {
    path: 'student-table',
    component: StudentTableComponent
  }
];

