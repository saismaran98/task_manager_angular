import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* String Interpolation {{any_public_property_of_the_class}}  */
  selectedUser = signal(DUMMY_USERS[randomIndex]) // declaring this vlaue selectedUser with out cosnt or let you are providing its value to the template i.e html which is called data binding. 
  imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar) // when using signal
 

  onSelectedUser(){
    const local_random_index = Math.floor(Math.random()* DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[local_random_index]); // update the signal
  }

}
