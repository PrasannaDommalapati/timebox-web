import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { DraggingService } from '../services/dragging.service';

export class Draggable {
  public get targets(): string[] {
    return this._targets;
  }

  public set targets(value: string[]) {
    this._targets = value;
  }

  constructor(private _targets : string[] = []) {

  }
}

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {
  @Input() targets !: string[];
  @Input("appDraggable") draggable !: Draggable;

  @HostListener("dragstart", ['$event']) onDragStart(e : DragEvent) {
    this._draggingService.startDrag(this.draggable);
  }

  @HostListener("dragend", ['$event']) onDragEnd(e : DragEvent) {
    this._draggingService.cancelDrag();
  }

  constructor(private _elementRef : ElementRef, private _renderer : Renderer2, private _draggingService : DraggingService) {
    _renderer.setAttribute(_elementRef.nativeElement, "draggable", "true");
  }

}
