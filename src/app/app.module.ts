import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticComponentComponent } from './static-component/static-component.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { InputFormComponentComponent } from './input-form-component/input-form-component.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponentComponent,
    DynamicComponentComponent,
    InputFormComponentComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
