import { Component } from '@angular/core';
import { BankUser } from '../types/BankUser';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';
import { getUsers, populateBank } from '../types/UserBaseFunctions';

@Component({
  selector: 'app-bank-overview',
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './bank-overview.component.html',
  styleUrl: './bank-overview.component.css'
})
export class BankOverviewComponent {

  constructor(){
    populateBank();
  }
  
  getUsersFromBase():BankUser[]{
    return getUsers();
  }

  navigateToUser(user: BankUser){
    console.log("Navigate to user " + user.name);
  }
}
