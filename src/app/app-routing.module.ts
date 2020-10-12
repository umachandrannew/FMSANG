import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FtthGenRptComponent,FtthWkgRptComponent} from './ftth-rpt/ftth-rpt.component';
import {FtthInfoCasesComponent} from './ftth-info-cases/ftth-info-cases.component';
import {MainComponent} from './main/main.component';
import {ChartComponent} from './chart/chart.component';

const routes: Routes = [
 {path:'',component: MainComponent  },
  { path: 'genRPT', component: FtthGenRptComponent },
  { path: 'genRPT/:rptid', component: FtthGenRptComponent },
  { path: 'FTTH-Info-Cases', component: FtthInfoCasesComponent },
  { path: 'wkgRPT/:rptid', component: FtthWkgRptComponent },
  { path: 'Chart', component: ChartComponent },
  { path: 'main', component: MainComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
