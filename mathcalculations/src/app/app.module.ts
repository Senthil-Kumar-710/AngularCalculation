
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RectangleComponent } from './rect/rect.component';
import { VolumeConeComponent } from './volumecone/volumecone.component';

@NgModule({
  declarations: [
    AppComponent,RectangleComponent,VolumeConeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
