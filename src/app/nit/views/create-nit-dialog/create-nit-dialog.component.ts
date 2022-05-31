import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CreateNitRequest } from 'src/app/shared/model/request/create-nit.request';
import { NitService } from 'src/app/shared/service/nit/nit.service';

@Component({
  selector: 'app-create-nit-dialog',
  templateUrl: './create-nit-dialog.component.html',
  styleUrls: ['./create-nit-dialog.component.scss']
})
export class CreateNitDialogComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  createNitForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<CreateNitDialogComponent>,
    private nitService: NitService
  ) {
    this.initForm();
  }
  ngOnDestroy(): void {
    this.subs.forEach(it => it.unsubscribe());
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.createNitForm = new FormGroup({
      'nitName': new FormControl('', Validators.required),
      'nitNumber': new FormControl('', Validators.required)
    });
  }

  public createNit(): void {
    if (this.createNitForm.valid) {
      let nitRequest = new CreateNitRequest();
      nitRequest.nitN = this.createNitForm.get('nitNumber')?.value;
      nitRequest.nitName = this.createNitForm.get('nitName')?.value;
      this.doCreateNit(nitRequest);
    }
  }

  private doCreateNit(createNit: CreateNitRequest): void {
    let res = this.nitService.createNit(createNit).subscribe({
      next: (res) => {
        this.dialogRef.close();
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.subs.push(res);
  }

}
