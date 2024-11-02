import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

// @Component is a decorator: this add some metadata to this class.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    CommonModule,
    TasksComponent,
  ], //if you want to update other compoent inside this component.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = DUMMY_USERS[0].id;

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!; //this.selectedUserId)!, ! if we dont find user we are returning undefined and task-component does not want undefined, we are telling tytpescript that this will not happen by using !
  }
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
  title = 'angular-project-udemy';
}
