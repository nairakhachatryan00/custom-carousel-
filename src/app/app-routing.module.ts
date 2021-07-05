import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoSlideComponent } from './auto-slide-module/auto-slide/auto-slide.component';
import {LoopComponent} from './loop-module/loop/loop.component';
import {CountComponent} from './count-module/count/count.component';


const routes: Routes = [
  { path: '', component: AutoSlideComponent },
  { path: 'loop', component: LoopComponent },
  { path: 'count', component: CountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
