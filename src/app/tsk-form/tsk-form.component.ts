import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsk-form',
  templateUrl: './tsk-form.component.html',
  styleUrls: ['./tsk-form.component.css']
})
export class TskFormComponent implements OnInit {
  @Input() taskList;
  newTask: string;
  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.taskList.unshift(this.newTask);
    localStorage.setItem('my tasks', JSON.stringify(this.taskList))
    this.newTask = '';
  }

}
