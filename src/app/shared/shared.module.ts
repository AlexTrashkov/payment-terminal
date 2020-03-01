import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderIconComponent } from './components/loader-icon/loader-icon.component';

@NgModule({
  declarations: [
    LoaderIconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderIconComponent,
  ]
})
export class SharedModule { }
