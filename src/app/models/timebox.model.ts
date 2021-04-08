import { Draggable } from "../directives/draggable.directive";
import { DropTarget } from "../directives/drop-target.directive";
import ScheduableBase from "./scheduable-base.model";

export default class TimeboxModel extends DropTarget {
  /**
   * timeFrom - the time this box starts at
   * duration - the duration of this time box
   * allocatedScheduable - the currently scheduled scheduable
   * scheduableHistory - the list of all scheduables that have been scheduled
   */
  constructor(private _from : Date, private _durationInMins : number, private _allocatedScheduable : ScheduableBase | null = null, private _scheduableHistory : ScheduableBase[] = []) {
    super(undefined, undefined, "timebox");
  }

  set allocatedScheduable(scheduable : ScheduableBase | null) {
    if (this._allocatedScheduable)
      this._scheduableHistory.push(this._allocatedScheduable);

    this._allocatedScheduable = scheduable;
  }

  get allocatedScheduable() : ScheduableBase | null {
    return this._allocatedScheduable;
  }

  get scheduableHistory() : ScheduableBase[] {
    return this._scheduableHistory;
  }

  get from() : Date {
    return this._from;
  }

  get durationInMins() : number {
    return this._durationInMins;
  }

  canDrop(draggable : Draggable) {
    if (this._allocatedScheduable)
      return false;

    return !!draggable;
  }

  dropped(draggable : Draggable) {
    this._allocatedScheduable = <ScheduableBase>draggable;
    console.log("dropped")
  }
}
