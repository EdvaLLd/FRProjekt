import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankUser } from '../types/BankUser';
import { getUser } from '../types/UserBaseFunctions';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() userid!: string;
  @Output() clicked = new EventEmitter<void>();

  getUser(): BankUser{
    return getUser(parseInt(this.userid));
  }


  handleClick(): void{
    this.clicked.emit();
  }
}
