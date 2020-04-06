import { createAction, props, union } from '@ngrx/store';

import { Filter, Serial } from '../../models';
import { SortCriteria, Genre } from '../../core/enums';

export const updateFilters = createAction(
  '[Table] Update Filters',
  props<{ filter: Filter }>()
);
export const resetFilters = createAction('[Table] Reset Filters');
export const updateSortCriteria = createAction(
  '[Table] Update Sort Criteria',
  props<{ sortCriteria: SortCriteria }>()
);
export const getInfoSuccess = createAction(
  '[Table] Get Info Success',
  props<{ serials: Serial[]; genres: Genre[]; years: number[] }>()
);
export const updateSerials = createAction(
  '[Table] Update Serials',
  props<{ serials: Serial[] }>()
);

const all = union({
  updateFilters,
  updateSortCriteria,
  getInfoSuccess
});

export type TableActions = typeof all;
