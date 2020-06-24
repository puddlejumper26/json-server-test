import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  @Input()
  data: Object = {};

  @Input()
  isVisible = false; // whether to show the dialog
  @Output()
  isVisibleChange = new EventEmitter(); // dialog to show the changed status event
  @Output()
  clickEvent = new EventEmitter();

  isEdit: boolean = false;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null ],
      address: [null, [Validators.required]],
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.data['id']) {
      this.isEdit = true;
      this.validateForm.setValue({
        name: this.data['name'],
        age: this.data['age'],
        address: this.data['address'],
      });
    } else {
      this.isEdit = false;
      this.validateForm.setValue({
        name: '',
        age: '',
        address: '',
      });
    }
  }

  handleOk(): void {
    this.submitForm();
  }

  handleCancel(): void {
    this.isVisibleChange.emit(false);
  }

  submitForm(): void {
    let params = {};
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (
        !(this.validateForm.controls[i].status === 'VALID') &&
        this.validateForm.controls[i].status !== 'DISABLED'
      ) {
        return;
      }
      if (
        this.validateForm.controls[i] &&
        this.validateForm.controls[i].value
      ) {
        params[i] = this.validateForm.controls[i].value;
      } else {
        params[i] = '';
      }
    }

    if (this.isEdit) {
      //PUT is edit
      this.http
        .put('http://localhost:3000/users/' + this.data['id'], params)
        .subscribe((res) => {
          this.clickEvent.emit();
        });
    } else {
      // POST is add new
      this.http.post('http://localhost:3000/users', params).subscribe((res) => {
        this.clickEvent.emit();
      });
    }
    this.isVisibleChange.emit(false);
  }
}
