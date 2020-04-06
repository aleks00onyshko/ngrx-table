import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TableState, Serial, Filter } from '../models';
import { Genre, SortCriteria } from '../core';
import { getInfoSuccess, updateFilters, resetFilters, updateSortCriteria } from './actions';
import { Observable } from 'rxjs';
import { getSerials, getGenres, getYears } from './selectors';

@Injectable({ providedIn: 'root' })
export class TableFacade {
  public serials$: Observable<Serial[]> = this.store.select(getSerials);
  public genres$: Observable<Genre[]> = this.store.select(getGenres);
  public years$: Observable<number[]> = this.store.select(getYears);

  constructor(private store: Store<TableState>) {}

  public updateFilters(filter: Filter): void {
    this.store.dispatch(updateFilters({ filter }));
  }

  public resetFilters(): void {
    this.store.dispatch(resetFilters());
  }

  public updateSortCriteria(sortCriteria: SortCriteria): void {
    this.store.dispatch(updateSortCriteria({ sortCriteria }));
  }

  public getInfoSuccess(serials: Serial[], genres: Genre[], years: number[]): void {
    this.store.dispatch(getInfoSuccess({ serials, genres, years }));
  }
}
