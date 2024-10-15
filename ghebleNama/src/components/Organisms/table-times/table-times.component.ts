import { Component } from '@angular/core';
import {TableItemRComponent} from "../../Molecules/table-item-r/table-item-r.component";
import {TableItemLComponent} from "../../Molecules/table-item-l/table-item-l.component";

@Component({
  selector: 'app-table-times',
  standalone: true,
  imports: [
    TableItemRComponent,
    TableItemLComponent
  ],
  templateUrl: './table-times.component.html',
  styleUrl: './table-times.component.css'
})
export class TableTimesComponent {

}
