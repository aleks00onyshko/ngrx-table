import { SortCriteria, Genre } from '../../core';
import { Filter } from '../filter';
import { Serial } from '../serial';

export interface TableState {
  loading: boolean;
  filters: Filter[];
  sortCriteria: SortCriteria;
  initialSerials: Serial[];
  serials: Serial[];
  genres: Genre[];
  years: number[];
}
