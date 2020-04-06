import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { withLatestFrom, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as moment from 'moment';

import { updateFilters, updateSerials, updateSortCriteria } from '../actions';
import { TableState, Serial, Filter } from '../../models';
import { FilterCriteria, Genre, SortCriteria } from '../../core';
import { getTableState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TableEffects {
  updateFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFilters),
      mergeMap(action => of(action).pipe(withLatestFrom(this.store$.select(getTableState)))),
      map(([action, { filters, initialSerials }]) => {
        return updateSerials({ serials: this.applyFilters(initialSerials, filters) });
      })
    )
  );

  updateSortCriteria$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateSortCriteria),
      mergeMap(action => of(action).pipe(withLatestFrom(this.store$.select(getTableState)))),
      map(([{ sortCriteria }, { serials }]) => {
        return updateSerials({ serials: this.sortSerials(sortCriteria, serials) });
      })
    )
  );

  constructor(private actions$: Actions, private store$: Store<TableState>) {}

  private sortSerials(sortCriteria: SortCriteria, serials: Serial[]): Serial[] {
    return serials.slice().sort((a, b) => {
      switch (sortCriteria) {
        case SortCriteria.Name:
          return a.name.localeCompare(b.name);
        case SortCriteria.Seasons:
          return a.seasons - b.seasons;
        case SortCriteria.Network:
          return a.network.localeCompare(b.network);
        case SortCriteria.PremiereDate:
          return (
            moment(a.premiereDate, 'DD-MM-YYYY').unix() -
            moment(b.premiereDate, 'DD-MM-YYYY').unix()
          );
      }
    });
  }

  private applyFilters(serials: Serial[], filters: Filter[]): Serial[] {
    const nameFilter = filters.find(filter => filter.filterCriteria === FilterCriteria.Name);
    const genreFilter = filters.find(filter => filter.filterCriteria === FilterCriteria.Genre);
    const yearFilter = filters.find(filter => filter.filterCriteria === FilterCriteria.Year);

    return serials.filter(serial => {
      return (
        this.filterByName(nameFilter.value, serial) &&
        this.filterByGenre(genreFilter.value as Genre, serial) &&
        this.filterByYear(yearFilter.value, serial)
      );
    });
  }

  private filterByName(name: string, serial: Serial): boolean {
    return name ? serial.name.toLowerCase().includes(name.toLowerCase()) : true;
  }

  private filterByGenre(genre: Genre, serial: Serial): boolean {
    return genre ? serial.genres.includes(genre) : true;
  }

  private filterByYear(year: string, serial: Serial): boolean {
    return year ? serial.premiereDate.split('.')[2] === year : true;
  }
}
