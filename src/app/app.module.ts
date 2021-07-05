import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoSlideModule } from './auto-slide-module/auto-slide.module';
import { LoopModule } from './loop-module/loop.module';
import { CountModule } from './count-module/count.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountModule,
    LoopModule,
    AutoSlideModule
  ],
  providers: [{
    provide: 'configs',
    useValue: {
      visibleItemsCount: 0,
      autoSlide: false,
      loop: false
    },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
