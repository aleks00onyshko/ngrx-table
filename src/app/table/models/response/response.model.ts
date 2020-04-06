import { Serial } from '../serial';
import { Genre } from '../../core';

export interface Response {
  serials: Serial[];
  genres: Genre[];
  years: number[];
}
