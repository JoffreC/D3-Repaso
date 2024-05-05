import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BarComponent} from "./components/bar/bar.component";
import {PieComponent} from "./components/pie/pie.component";
import {ScatterComponent} from "./components/scatter/scatter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarComponent, PieComponent, ScatterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd3-app';
}
