import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { type User } from './user.model'; //type User to denote its a type which is optional 

// @Input: decorator, input: special function
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected !: boolean;
  @Output() userComponentEmmiter = new EventEmitter<string>(); //commonly used rather than output

  get imagePath() {
    return 'assets/users/' + this.user.avatar; //using signal make var a function call.
  }
  onSelectedUser() {
    this.userComponentEmmiter.emit(this.user.id);
  }
  sendUserNames() {
    this.userComponentEmmiter.emit(this.user.name);
  }
}
