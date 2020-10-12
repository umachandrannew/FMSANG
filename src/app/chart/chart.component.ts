import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';


interface chartParam {

  name:string;
  value:number;
}



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

RptDate:any;
private RptTableData:any;


wkgData:chartParam[]=[];
provData:chartParam[]=[];
clsData:chartParam[]=[];
netData:chartParam[]=[];
provclsData:any[]=[];
provclsTrendData:any[]=[];
provTrendData:any[]=[];
clsTrendData:any[]=[];
 
 view: any[] = [350, 200];

  //Common options
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  piecolorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  // options
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
 
  showYAxisLabel = true;
  

  verbarcolorScheme = {
    domain: ['#ff0080', '#bfff00', '#00bfff', '#AAAAAA']
  };



  constructor(private httpService:AppService) {

   
  }
  ngOnInit(): void {
    let resultData:any; 
    this.httpService.getData('ALL_AREA')
    .subscribe(data=>
        {resultData=JSON.parse(data);
        this.RptDate=resultData.RptDate;
        this.RptTableData=resultData.RptData;
        this.RptTableData.forEach(element => {

        this.wkgData.push({name:element.GMCODE, value:element.FTTH_WKG });
        this.provclsData.push(

        {
        "name": element.GMCODE,
        "series": [
        {
        "name": "PROV",
        "value":element.MNTH_GROSS_FTTHVOICE+ element.MNTH_GROSS_FTTHBB
        },
        {
        "name": "CLS",
        "value": element.MNTH_CLSR_FTTHVOICE+ element.MNTH_CLSR_FTTHBB
        }
        ]
        }

        )


        }

        );
        this.wkgData = [...this.wkgData];
        this.provclsData=[...this.provclsData];
        },error=> {console.log(error)}
        );

      this.httpService.getData('PROV_CLS_TREND').subscribe(data=>

          {resultData=JSON.parse(data);
          this.RptDate=resultData.RptDate;
          this.RptTableData=resultData.RptData;
          this.RptTableData.forEach(element => {
          this.provTrendData.push(
          {
          "name": element.DDMM,
          "value":element.DAY_GROSS_FTTHVOICE+ element.DAY_GROSS_FTTHBB
          });
          this.clsTrendData.push(
          {
          "name": element.DDMM,
          "value":element.DAY_CLSR_FTTHVOICE+ element.DAY_CLSR_FTTHBB
          });
          }
    
    );
    
    this.wkgData = [...this.wkgData];
    this.provclsData=[...this.provclsData];
    this.provTrendData=[...this.provTrendData];
    this.clsTrendData=[...this.clsTrendData];
    this.provclsTrendData= [
      {
        "name": "PROV",
        "series": this.provTrendData
      },
      {
        "name": "CLS",
        "series": this.clsTrendData
      }]
            },error=> {console.log(error)}
            
            );
         }

}






