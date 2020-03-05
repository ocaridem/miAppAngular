import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    MatTableModule,MatInputModule,MatDatepickerModule,MatNativeDateModule
  ],
  exports: [
    MatTableModule,MatInputModule,MatDatepickerModule,MatNativeDateModule
  ]
})
export class MaterialModule { }
