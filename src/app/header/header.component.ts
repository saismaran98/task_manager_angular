import { Component } from "@angular/core";

@Component({
    selector: 'app-header', //tell angular which element should be controler or replaced by this component 
    standalone: true, //standalone component. 
    templateUrl: './header.component.html', //markup that should be displayed by this component
    styleUrl: './header.component.css'

})
export class HeaderComponent{}