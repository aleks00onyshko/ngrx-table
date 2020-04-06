import { Component, OnInit, Input } from '@angular/core';
import { Serial } from '../../models';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {
  @Input() serial: Serial;
}
