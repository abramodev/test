import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { EUserRole, IUser } from '../../../../core/models/user.model';
import { EInputType } from '../../../../shared/search/model/search.model';
import { InputFieldComponent } from '../../../../shared/search/input-field/input-field.component';
import { SelectFieldComponent } from '../../../../shared/search/select-field/select-field.component';

@Component({
  selector: 'app-user-edit-modal',
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, InputFieldComponent, SelectFieldComponent],
  standalone: true,
  templateUrl: './user-edit-modal.component.html',
  styleUrl: './user-edit-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditModalComponent {
  public readonly data = inject<IUser>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(
    MatDialogRef<UserEditModalComponent, IUser>
  );
  readonly roleOptions: Array<EUserRole> = [
    EUserRole.admin,
    EUserRole.moderator,
    EUserRole.user,
  ];
  private readonly fb = inject(NonNullableFormBuilder);
  protected readonly EInputType = EInputType;

  editForm: FormGroup<{
    firstName: FormControl<string>;
    age: FormControl<number>;
    email: FormControl<string>;
    role: FormControl<EUserRole>;
  }> = this.fb.group({
    firstName: this.fb.control(this.data.firstName, [
      Validators.required,
      Validators.minLength(2),
    ]),
    age: this.fb.control(this.data.age, [
      Validators.required,
      Validators.min(0),
    ]),
    email: this.fb.control(this.data.email, [
      Validators.required,
      Validators.email,
    ]),
    role: this.fb.control<EUserRole>(this.data.role as EUserRole, [
      Validators.required,
    ]),
  });

  save(): void {
    const updated: IUser = { ...this.data, ...this.editForm.getRawValue() };
    this.dialogRef.close(updated);
  }
  close(): void {
    this.dialogRef.close();
  }
}
