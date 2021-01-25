import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './component/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DuzenleComponent } from './component/duzenle/duzenle.component';
import {MatDialogModule,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { TableService } from './services/table.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DuzenleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgbModule,
    MatInputModule,
    FormsModule
  ],
 

  providers: [TableService],
  bootstrap: [AppComponent],
  entryComponents: [DuzenleComponent],
})
export class AppModule { }
