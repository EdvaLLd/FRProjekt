import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() buttonMessage!: string;
  @Output() clicked = new EventEmitter<void>();

  handleClick(){
    this.clicked.emit();
  }
}
