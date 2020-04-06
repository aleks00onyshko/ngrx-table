import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../core/enums';

@Component({
  selector: 'app-genre-label',
  templateUrl: './genre-label.component.html',
  styleUrls: ['./genre-label.component.scss']
})
export class GenreLabelComponent {
  @Input() genre: Genre;

  public Genre = Genre;
}
