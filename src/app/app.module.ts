import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    GetComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
