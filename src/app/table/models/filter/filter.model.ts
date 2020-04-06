import { FilterCriteria } from '../../core/enums';

export class Filter {
  constructor(public filterCriteria: FilterCriteria, public value: string) {}
}
