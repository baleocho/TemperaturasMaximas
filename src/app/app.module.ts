import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//PRIME NG IMPORTS
import {TableModule} from 'primeng/table';
import { DropdownModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/primeng';
import {ChartModule} from 'primeng/chart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    DropdownModule,
    EditorModule,
    MultiSelectModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
