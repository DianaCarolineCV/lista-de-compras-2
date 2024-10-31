import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ListaComponent } from "../../components/lista/lista.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ListaComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}
