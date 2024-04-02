import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template:`
  <h1> Hello Bibliotech !</h1>
  `,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'bibliotech';
}
