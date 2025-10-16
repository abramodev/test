import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgTemplateOutlet],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
  readonly data = input.required<Array<T>>();
  @Input({required: true}) cardTempl!: TemplateRef<{$implicit: T}>
}
