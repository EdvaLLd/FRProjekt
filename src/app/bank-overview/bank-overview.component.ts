import { Component } from '@angular/core';
import { BankUser } from '../types/BankUser';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';
import { getUsers, populateBank } from '../types/UserBaseFunctions';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bank-overview',
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './bank-overview.component.html',
  styleUrl: './bank-overview.component.css'
})
export class BankOverviewComponent {

  //borde antagligen vara en ngOnInit()?
  constructor(private router: Router){
    //Den här ska egentligen vara exempelvis en JSON-fil som sparas och kan uppdateras mellan varje körning
    //men det kändes som att det var utanför scopet på den här uppgiften
    populateBank();
  }
  
  getUsersFromBase():BankUser[]{
    return getUsers();
  }

  navigateToUser(user: BankUser){
    this.router.navigate(["/account-view", user.id]);
  }
}
