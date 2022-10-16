import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { EmployeeModule } from './employee/employee.module';

const NGRX_MODULES = [
  StoreModule.forRoot([]),
  EffectsModule.forRoot([]),
  environment.production ? [] : StoreDevtoolsModule.instrument({
    maxAge:400,
    name:'Customer Onboarding Dev Tool',
    logOnly:environment.production
  }),
]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeModule,
    ...NGRX_MODULES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
