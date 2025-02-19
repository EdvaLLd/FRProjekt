import { Routes } from '@angular/router';
import { AccountViewComponent } from './account-view/account-view.component';

//Här fixar man med routes
//här kan man lägga in componenter när man vill navigera

//Required for a route object:
//path: string
//component: Component

export const routes: Routes = [
 {path: "account-view", component: AccountViewComponent}
];
