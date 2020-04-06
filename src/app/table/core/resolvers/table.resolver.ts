import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Serial } from '../../models';
import { Genre } from '../enums';
import { TableFacade } from '../../store';

@Injectable({ providedIn: 'root' })
export class TableResolver implements Resolve<any> {
  constructor(private http: HttpClient, private tableFacade: TableFacade) {}

  resolve() {
    return forkJoin([
      this.http.get<Serial[]>(environment.serialsUrl),
      this.http.get<Genre[]>(environment.genresUrl),
      this.http.get<number[]>(environment.yearsUrl)
    ]).pipe(
      map(([serials, genres, years]) => {
        this.tableFacade.getInfoSuccess(serials, genres, years);
      })
    );
  }
}
