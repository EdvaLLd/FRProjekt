import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BankUser } from '../types/BankUser';
import { getUser } from '../types/UserBaseFunctions';

@Component({
  selector: 'app-account-view',
  imports: [RouterLink],
  templateUrl: './account-view.component.html',
  styleUrl: './account-view.component.css'
})
export class AccountViewComponent {
  currentId!: number;
  constructor(private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id != null)
      {
        this.currentId = +id;
      }
      else
      {
        this.currentId = 0;
      }
    });
  }

  getUser(): BankUser{
    return getUser(this.currentId);
  }
}
