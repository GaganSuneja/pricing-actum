import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { PillComponent } from './components/pill/pill.component';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { PillContainerComponent } from './components/pill-container/pill-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceRangeSelectorComponent } from './components/price-range-selector/price-range-selector.component';
import { PlanSelectorComponent } from './components/plan-selector/plan-selector.component';
import { NoConnectivityComponent } from './pages/no-connectivity/no-connectivity.component';
import { ModalComponent } from './components/modal/modal.component';
import { LeadFormComponent } from './components/lead-form/lead-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PlanCardComponent,
    PillComponent,
    ButtonComponent,
    PillContainerComponent,   
    PriceRangeSelectorComponent,
    PlanSelectorComponent,
    NoConnectivityComponent,
    ModalComponent,
    LeadFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
