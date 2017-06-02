import { Component, Renderer } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  start: any;
  pressed: boolean;
  startX: any;
  startWidth: any;

  constructor(public renderer: Renderer) { }

  private onMouseDown(event) {
    this.start = event.target;
    this.pressed = true;
    this.startX = event.x;
    this.startWidth = $(this.start).parent().width();
    this.initResizableColumns();
  }

  private initResizableColumns() {
    this.renderer.listenGlobal('body', 'mousemove', (event) => {
      if (this.pressed) {
        let width = this.startWidth + (event.x - this.startX);
        $(this.start).parent().css({ 'min-width': width, 'max-   width': width });
        let index = $(this.start).parent().index() + 1;
        $('.glowTableBody tr td:nth-child(' + index + ')').css({ 'min-width': width, 'max-width': width });
      }
    });
    this.renderer.listenGlobal('body', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
      }
    });
  }

}
