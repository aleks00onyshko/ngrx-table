import { Genre } from '../../core/enums';

export interface Serial {
  name: string;
  seasons: number;
  network: string;
  genres: Genre[];
  premiereDate: string;
}
