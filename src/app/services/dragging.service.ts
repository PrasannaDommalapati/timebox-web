import { Injectable } from '@angular/core';
import { DraggableAlreadyActiveError } from 'src/exceptions/DraggableAlreadyActiveError';
import { NoDroppableActiveError } from 'src/exceptions/NoDroppableActiveError';
import { NotImplementedError } from 'src/exceptions/NotImplementedError';
import { Draggable } from '../directives/draggable.directive';
import { DropTarget } from '../directives/drop-target.directive';

@Injectable({
  providedIn: 'root'
})
export class DraggingService {

  activeDraggable : Draggable | null = null;

  constructor() {

  }

  startDrag(draggable : Draggable) {
    if (draggable) {
      if (this.activeDraggable) {
        throw DraggableAlreadyActiveError();
      }

      this.activeDraggable = draggable;
    }
  }

  cancelDrag() {
    this.activeDraggable = null;
  }

  canDrop(dropTarget : DropTarget) : boolean {
    if (!this.activeDraggable)
      throw NoDroppableActiveError();

    if (this.activeDraggable.targets.length > 0) {
      return this.activeDraggable.targets.includes(dropTarget.name);
    }

    return true;
  }

  drop(dropTarget : DropTarget) : boolean {
    console.log("drop")
    if (this.canDrop(dropTarget)) {
      dropTarget.dropped(this.activeDraggable!);
      this.activeDraggable = null;
      return true;
    }

    return false;
  }
}
