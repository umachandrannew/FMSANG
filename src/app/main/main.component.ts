import { Component, OnInit, } from '@angular/core';
import {AppService,keyValueSortService,MyGlobal} from '../app.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  keySort:keyValueSortService;
  frData:any;
  frHeaders:any;
  frPageHeading:any;
  frRptDate:any

  eoiData:any;
  eoiHeaders:any;
  eoiPageHeading:any;
  eoiRptDate:any;

  olteData:any;
  olteHeaders:any;
  oltePageHeading:any;
  olteRptDate:any;

  bbcData:any;
  bbcHeaders:any;
  bbcPageHeading:any;
  bbcRptDate:any;
  

constructor(private httpService:AppService ,private myGlobal:MyGlobal) { }

  ngOnInit(): void {
this.keySort=new keyValueSortService();
    var resultData;
    this.httpService.getDataforAg('FR_COUNT').subscribe(data=>
       
      {
        MyGlobal.LOADING = true;
        resultData=JSON.parse(data);
        this.frPageHeading=resultData.RptPageHeading;
        this.frRptDate=resultData.RptDate;
       this.frHeaders=resultData.RptHeader;
        this.frData=resultData.RptData;
        MyGlobal.LOADING = false;
        },error=> { console.log(error)}
        
        );

        this.httpService.getDataforAg('EOI_COUNT').subscribe(data=>
            
          {resultData=JSON.parse(data);
            this.eoiPageHeading=resultData.RptPageHeading;
            this.eoiRptDate=resultData.RptDate;
           this.eoiHeaders=resultData.RptHeader;
            this.eoiData=resultData.RptData;
            },error=> { console.log(error)}
            
            );
            this.httpService.getDataforAg('OLTE_COUNT').subscribe(data=>
            
              {resultData=JSON.parse(data);
                this.oltePageHeading=resultData.RptPageHeading;
                this.olteRptDate=resultData.RptDate;
               this.olteHeaders=resultData.RptHeader;
                this.olteData=resultData.RptData;
                },error=> { console.log(error)}
                      );

            this.httpService.getDataforAg('FM_BBC').subscribe(data=>
            
              {resultData=JSON.parse(data);
                this.bbcPageHeading=resultData.RptPageHeading;
                this.bbcRptDate=resultData.RptDate;
               this.bbcHeaders=resultData.RptHeader;
                this.bbcData=resultData.RptData;
                },error=> { console.log(error)}
                      );


                


  }

}
