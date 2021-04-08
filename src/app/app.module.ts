import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TimeboxComponent } from './schedule/timebox/timebox.component';
import { ToTimeSlotTimePipe } from './pipes/to-time-slot-time.pipe';
import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { ScheduableComponent } from './schedule/scheduable/scheduable.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TimeboxComponent,
    ToTimeSlotTimePipe,
    DraggableDirective,
    DropTargetDirective,
    ScheduableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
