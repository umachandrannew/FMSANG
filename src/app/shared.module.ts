import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{AppService,keyValueSortService,MyGlobal} from './app.service';


@NgModule({

    imports: [
      
      HttpClientModule
    ],
  providers :[AppService, keyValueSortService,MyGlobal]
  })

    export class SharedModule
    {
      constructor()
      {}
    }