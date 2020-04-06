import { Component, OnInit } from '@angular/core';
import { TableFacade } from '../../store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  constructor(private tableFacade: TableFacade) {}
}
