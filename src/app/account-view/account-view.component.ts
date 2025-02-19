import { Component } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-account-view',
  imports: [CustomButtonComponent],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent {
  count:number = 0;

  addToCount(){
    this.count += 1;
  }
}
