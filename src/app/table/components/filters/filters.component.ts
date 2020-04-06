import { Component, OnInit } from '@angular/core';
import { TableFacade } from '../../store';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter } from '../../models';
import { FilterCriteria, Genre } from '../../core';

@Component({
  selector: 'app-table-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public filtersForm: FormGroup;

  constructor(private tableFacade: TableFacade) {}

  ngOnInit() {
    this.filtersForm = new FormGroup({
      name: new FormControl(null),
      genre: new FormControl(null),
      year: new FormControl(null)
    });

    this.filtersForm.get('name').valueChanges.subscribe((value: string) => {
      this.tableFacade.updateFilters(new Filter(FilterCriteria.Name, value));
    });
  }

  public genreChanged(): void {
    this.tableFacade.updateFilters(
      new Filter(FilterCriteria.Genre, this.filtersForm.get('genre').value)
    );
  }

  public yearChanged(): void {
    this.tableFacade.updateFilters(
      new Filter(FilterCriteria.Year, this.filtersForm.get('year').value + '')
    );
  }

  public resetFitlers(): void {
    this.filtersForm.reset();
    this.tableFacade.resetFilters();
  }
}
