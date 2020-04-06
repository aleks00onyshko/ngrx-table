import { createReducer, on } from '@ngrx/store';

import { TableState } from '../../models/store';
import { Filter } from '../../models';
import { FilterCriteria, SortCriteria } from '../../core';
import {
  updateFilters,
  updateSortCriteria,
  getInfoSuccess,
  updateSerials,
  resetFilters
} from '../actions';

const defaultFilters = [
  new Filter(FilterCriteria.Name, ''),
  new Filter(FilterCriteria.Genre, ''),
  new Filter(FilterCriteria.Year, '')
];

export const initialState: TableState = {
  loading: true,
  filters: defaultFilters,
  sortCriteria: null,
  initialSerials: [],
  serials: [],
  genres: [],
  years: []
};

export const tableReducer = createReducer(
  initialState,
  on(getInfoSuccess, (state, { serials, years, genres }) => ({
    ...state,
    serials,
    years,
    genres,
    initialSerials: serials,
    loading: false
  })),
  on(updateFilters, (state, { filter }) => ({
    ...state,
    filters: [
      ...state.filters.filter(el => el.filterCriteria !== filter.filterCriteria),
      filter
    ]
  })),
  on(resetFilters, state => ({
    ...state,
    filters: defaultFilters,
    serials: state.initialSerials
  })),
  on(updateSortCriteria, (state, { sortCriteria }) => ({
    ...state,
    sortCriteria
  })),
  on(updateSerials, (state, { serials }) => ({
    ...state,
    serials
  }))
);
