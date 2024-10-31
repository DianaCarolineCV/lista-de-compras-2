import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports: [RouterModule]
})
export class NotFoundComponent {}