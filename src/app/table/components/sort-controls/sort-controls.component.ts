import { Component, OnInit } from '@angular/core';
import { SortCriteria } from '../../core';
import { TableFacade } from '../../store';

@Component({
  selector: 'app-table-sort-controls',
  templateUrl: './sort-controls.component.html',
  styleUrls: ['./sort-controls.component.scss']
})
export class SortControlsComponent {
  public sortCriteria = SortCriteria;

  constructor(private tableFacade: TableFacade) {}

  updateSortCriteria(sortCriteria: SortCriteria): void {
    this.tableFacade.updateSortCriteria(sortCriteria);
  }
}
