import { Component, HostListener } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable-resizable-bar',
  standalone: true,
  templateUrl: './draggable-resizable-bar.component.html',
  styleUrls: ['./draggable-resizable-bar.component.css'],
  imports: [
    // Import Angular CDK modules needed for drag-and-drop functionality
    // This should include DragDropModule if needed
    // For example:
    // DragDropModule
  ]
})
export class DraggableResizableBarComponent {
  width = 100;  // Initial width
  height = 30;  // Initial height

  private resizing = false;
  private startX!: number;
  private startY!: number;
  private startWidth!: number;
  private startHeight!: number;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.resizing) {
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;
      this.width = this.startWidth + dx;
      this.height = this.startHeight + dy;
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp() {
    this.resizing = false;
  }

  startResize(event: MouseEvent) {
    event.preventDefault();
    this.resizing = true;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startWidth = this.width;
    this.startHeight = this.height;
  }
}
