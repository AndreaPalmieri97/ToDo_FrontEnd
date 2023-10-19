import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  status: string = 'In progress';
  dropdownDisabled: boolean = false;

  updateStatus() {
    this.status = 'Done';
    this
    .dropdownDisabled = true;
  }
  //DA AGGIORNARE IL METODO HTTP
}
