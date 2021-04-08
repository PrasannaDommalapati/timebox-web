import { Draggable } from "../directives/draggable.directive";

export default class ScheduableBase extends Draggable {
  /**
   * _id - Unique id of the scheduable.
   */
  constructor(private _id : string, private _color : string = "#FF0")  {
    super();
  }

  get id() {
    return this._id;
  }

  get color() {
    return this._color;
  }
}
