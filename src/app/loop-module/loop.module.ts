import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    LoopComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LoopModule { }
