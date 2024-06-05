import { Component, Input } from '@angular/core';
import { Content } from '../../../../_shared/models/contente.model';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {
  @Input() contentList!: Content[];

  isDown: boolean = false;
  startX: number = 0;
  scrollLeft: number = 0;

  onMouseDown(event: MouseEvent): void {
    const slider: HTMLElement = event.currentTarget as HTMLElement;
    this.isDown = true;
    slider.classList.add('active');
    this.startX = event.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
  }

  onMouseLeave(): void {
    this.isDown = false;
    const slider: HTMLElement = document.querySelector('.container__card__section') as HTMLElement;
    if (slider) {
      slider.classList.remove('active');
    }
  }

  onMouseUp(): void {
    this.isDown = false;
    const slider: HTMLElement = document.querySelector('.container__card__section') as HTMLElement;
    if (slider) {
      slider.classList.remove('active');
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDown) return;
    event.preventDefault();
    const slider: HTMLElement = event.currentTarget as HTMLElement;
    const x = event.pageX - slider.offsetLeft;
    const walk = (x - this.startX) * 1;
    slider.scrollLeft = this.scrollLeft - walk;
  }
}
