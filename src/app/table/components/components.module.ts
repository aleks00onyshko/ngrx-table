import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { TableComponent } from './table';
import { FiltersComponent } from './filters';
import { SortControlsComponent } from './sort-controls';
import { TableRowComponent } from './table-row';
import { GenreLabelComponent } from './genre-label';

const COMPONENTS = [
  TableComponent,
  FiltersComponent,
  SortControlsComponent,
  TableRowComponent,
  GenreLabelComponent
];

@NgModule({
  imports: [SharedModule],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class TableComponentsModule {}
