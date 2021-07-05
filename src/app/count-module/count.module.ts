import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComponent } from './count/count.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ CountComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CountModule { }
