import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AddEditAppointment } from './add-edit/add-edit-appointment.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AppointmentConfirmDialogComponent } from './add-edit/components/confirm-dialog/appointment-confirm-dialog.component';
import { AppointmentDeleteDialogComponent } from './add-edit/components/delete-dialog/appointment-delete-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    AddEditAppointment,
    AppointmentConfirmDialogComponent,
    AppointmentDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class AppointmentModule { }
