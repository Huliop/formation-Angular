import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatCardModule, MatIconModule } from '@angular/material'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ]
})
export class CustomMaterialModule { }
