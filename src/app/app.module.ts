import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './components/rockpaperscissors/score/score.component';
import { ControlsComponent } from './components/rockpaperscissors/controls/controls.component';
import { EvaluateService } from 'src/app/services/rockpaperscissors/evaluate.service';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EvaluateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
