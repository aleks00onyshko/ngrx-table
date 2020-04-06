import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { tableReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TableEffects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('table', tableReducer),
    EffectsModule.forFeature([TableEffects])
  ]
})
export class TableStoreModule {}
