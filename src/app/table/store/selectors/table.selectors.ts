import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TableState } from '../../models';

export const getTableState = createFeatureSelector<TableState>('table');

export const getLoading = createSelector(getTableState, (state: TableState) => state.loading);
export const getFilters = createSelector(getTableState, (state: TableState) => state.filters);
export const getSortCriteria = createSelector(
  getTableState,
  (state: TableState) => state.sortCriteria
);
export const getInitialSerials = createSelector(
  getTableState,
  (state: TableState) => state.initialSerials
);
export const getSerials = createSelector(getTableState, (state: TableState) => state.serials);
export const getGenres = createSelector(getTableState, (state: TableState) => state.genres);
export const getYears = createSelector(getTableState, (state: TableState) => state.years);
