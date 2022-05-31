import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    exports: [
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatSelectModule,
        MatDialogModule,
        MatCardModule
    ],
    providers: [
        MatDatepickerModule,
        { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
        { provide: MAT_DATE_LOCALE, useValue: 'es-GT' }
    ]
})
export class MaterialModule { }