import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent, TableComponentsModule } from './components';
import { TableResolver } from './core/resolvers';

const routes: Routes = [
  {
    path: 'table',
    component: TableComponent,
    resolve: {
      tableResolver: TableResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table'
  }
];
@NgModule({
  imports: [TableComponentsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
