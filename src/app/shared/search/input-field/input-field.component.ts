import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EInputType } from '../model/search.model';

@Component({
  selector: 'app-input-field',
  imports: [],
  standalone: true,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type: EInputType = EInputType.text;

  protected disabled = false;
  private value: string | number = '';
  private onChange: (v: string | number) => void = () => {};
  public onTouched: () => void = () => {};

  writeValue(v: string | number | null): void {
    this.value = v ?? '';
  }
  registerOnChange(fn: (v: string | number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get view(): string {
    return String(this.value ?? '');
  }

  onInput(e: Event): void {
    const raw = (e.target as HTMLInputElement).value;
    const out = this.type === EInputType.number ? Number(raw) : raw;
    this.value = out;
    this.onChange(out);
  }
}
