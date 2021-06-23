import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PillComponent } from './components/pill/pill.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { PillContainerComponent } from './components/pill-container/pill-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PillComponent,
    ButtonComponent,
    PillContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
