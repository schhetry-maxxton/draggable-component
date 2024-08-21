import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { DraggableResizableBarComponent } from "./draggable-resizable-bar/draggable-resizable-bar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GanttChartComponent, DraggableResizableBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chartt';
}
