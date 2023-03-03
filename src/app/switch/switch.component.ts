import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent {
  switch = false;
  @Output() showCatsEvent = new EventEmitter<boolean>();

  handleSwitch() {
    this.switch = !this.switch;
    this.showCatsEvent.emit(this.switch);
  }
}
