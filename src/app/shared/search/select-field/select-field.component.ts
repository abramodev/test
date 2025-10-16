import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  imports: [],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectFieldComponent,
      multi: true,
    },
  ],
})
export class SelectFieldComponent<T extends string | number>
  implements ControlValueAccessor
{
  @Input({ required: true }) options!: T[];

  disabled = false;
  value: T | null = null;

  writeValue(v: T | null): void {
    this.value = v;
  }
  registerOnChange(fn: (v: T) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private onChange: (v: T) => void = () => {};
  private onTouched: () => void = () => {};

  onSelectChange(e: Event): void {
    const el = e.target as HTMLSelectElement;
    const idx = el.selectedIndex;
    const v = this.options[idx];

    this.value = v;
    this.onChange(v);
  }
  onBlur(): void {
    this.onTouched();
  }
}
