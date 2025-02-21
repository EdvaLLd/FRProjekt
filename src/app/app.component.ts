import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Users } from './types/AllUsers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "project";
}
