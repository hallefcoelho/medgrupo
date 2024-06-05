import { Component, Input } from '@angular/core';
import { Partial } from '../../../../_shared/models/partial.model';

@Component({
  selector: 'app-card-partial',
  templateUrl: './card-partial.component.html',
  styleUrl: './card-partial.component.scss'
})
export class CardPartialComponent {
  @Input() partial!: Partial[];
}
