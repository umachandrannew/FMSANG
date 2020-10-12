
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from "ag-grid-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {SharedModule} from './shared.module';
import { FtthGenRptComponent,FtthWkgRptComponent } from './ftth-rpt/ftth-rpt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ChartComponent} from './chart/chart.component';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {FtthInfoCasesComponent, } from './ftth-info-cases/ftth-info-cases.component';
import{FtthCaseIComponent,FtthCaseIIComponent,FtthCaseIIIComponent,FtthCaseIVComponent,FtthCaseVComponent,
  
  FtthCaseIIAComponent,  FtthCaseIIIAComponent } from './ftth-cases/ftth-cases.component';
import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,SharedModule,AppRoutingModule, NgxChartsModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule, MatDialogModule,MatProgressBarModule

  ],

  declarations: [
    AppComponent,FtthInfoCasesComponent,FtthCaseIComponent,FtthCaseIIComponent,FtthCaseIIIComponent,FtthCaseIVComponent,FtthCaseVComponent,
  
    FtthCaseIIAComponent,  FtthCaseIIIAComponent,
    MenuComponent,FtthGenRptComponent,FtthWkgRptComponent,ChartComponent,MainComponent
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
