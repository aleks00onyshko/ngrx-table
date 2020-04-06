import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { TableComponentsModule } from './components';
import { TableStoreModule } from './store/store.module';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
  imports: [SharedModule, TableComponentsModule, TableStoreModule, TableRoutingModule],
  exports: [TableComponentsModule]
})
export class TableModule {}
