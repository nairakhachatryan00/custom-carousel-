import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AutoSlideComponent } from './auto-slide/auto-slide.component';

@NgModule({
  declarations: [
    AutoSlideComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AutoSlideModule { }
