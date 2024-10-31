import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar !: string; // this @Input make it settable from outside so we can set it from diff place, !: this will be set by outside value and not currently set. 
  @Input() name !: string;

  get imagePath(){
    return 'assets/users/'+this.avatar;
  }
  onSelectedUser(){
   
  }

}
