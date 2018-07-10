import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './view-data/view-data.component';
import {ViewDataService} from "./view-data/view-data.service";
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatList, MatListModule,
  MatTableModule
} from "@angular/material";
import { UpdateDataComponent } from './update-data/update-data.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,

    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [ViewDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
