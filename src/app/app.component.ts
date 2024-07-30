import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { Principal2Component } from "./principal2/principal2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent, Principal2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-front';
}
