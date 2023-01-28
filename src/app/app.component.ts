import { Component } from '@angular/core';
import { EmployeeTable } from './EmployeeTable';
const Employee_Data: EmployeeTable[] = [
  {id: 1, name: 'Anil', pass: 'anil#pass', email: 'anil@mail.com'},
  {id: 2, name: 'Shyam', pass: 'shyam#pass', email: 'shyam@mail.com'},
  {id: 3, name: 'Swara', pass: 'swara#pass', email: 'swara@mail.com'},
  {id: 4, name: 'Radha', pass: 'radha#pass', email: 'radha@mail.com'},
  {id: 5, name: 'Tina', pass: 'tina#pass', email: 'tina@mail.com'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coding';
  data = "Coding Angular";
  displayedColumns: string[] = ['id', 'name', 'pass', 'email'];
  dataSource = Employee_Data;
  
}
