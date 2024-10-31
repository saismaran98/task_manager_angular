import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

// @Input: decorator, input: special function
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; //with require:true use !: that assure there is a value. this @Input make it settable from outside so we can set it from diff place, !: this will be set by outside value and not currently set.
  @Input({ required: true }) name!: string;
  @Output() showTaskForClickedUser = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar; //using signal make var a function call.
  }
  onSelectedUser() {
    this.showTaskForClickedUser.emit(this.id);
  }
}
