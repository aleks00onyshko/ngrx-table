import { NgModule } from '@angular/core';

import { TableComponent } from './table';
import { FiltersComponent } from './filters';
import { SortControlsComponent } from './sort-controls';
import { TableRowComponent } from './table-row';
import { SharedModule } from '../../shared';

const COMPONENTS = [
  TableComponent,
  FiltersComponent,
  SortControlsComponent,
  TableRowComponent
];

@NgModule({
  imports: [SharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class TableComponentsModule {}
