import { Component, computed, Input, input} from '@angular/core';

// @Input: decorator, input: special function
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* signal is used very less so we will use approach without signal */

  
  // @Input({required:true}) avatar !: string; //with require:true use !: that assure there is a value. this @Input make it settable from outside so we can set it from diff place, !: this will be set by outside value and not currently set. 
  // @Input({required:true}) name !: string;
  avatar = input.required<string>(); //using signal, these input are read only not to write. 
  name = input.required<string>();

  // when to use readsignal when you want to notify dom change.
  // get imagePath(){
  //   return 'assets/users/'+this.avatar(); //using signal make var a function call.
  // }
  imagePath = computed( ()=> {
    return 'assets/users/'+this.avatar();
  })
  onSelectedUser(){
   
  }

}
