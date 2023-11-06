import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<nav>
    <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/about">About Us</a></li>
        <li><a routerLink="/products">Hunting Gear</a></li>
    </ul>
</nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
}
