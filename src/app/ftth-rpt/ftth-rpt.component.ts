

import { Component, OnInit, ViewChild  } from '@angular/core';
import { AgGridAngular } from  "ag-grid-angular";
import { GridApi} from 'ag-grid-community';
import {AppService,keyValueSortService,MyGlobal} from '../app.service';
import { ActivatedRoute, ParamMap  } from '@angular/router';


@Component({
  selector: 'app-ftth-gen-rpt',
  templateUrl: './ftth-gen-rpt.component.html'
})
export class FtthGenRptComponent implements OnInit {
  
 // modules= [ClientSideRowModelModule,CsvExportModule];
  @ViewChild('agGrid',{static: true}) agGrid: AgGridAngular;

  private gridApi:GridApi;
  private gridColumnApi;
   defaultColDef:any;
   RptPageHeading:string;
  RptHeader:any;
  RptDate:string;
  RptTableData:any;
  rptid: string | undefined;
  private sub: any;
  reportLoadStatus:string="";

 
  constructor(private route: ActivatedRoute,private httpService:AppService, private keyvaluesort:keyValueSortService,private myGlobal:MyGlobal) { 
    
   this. defaultColDef={
    sortable: true,
    resizable: true,
    enableCellTextSelection:true
    
}
  }

  ngOnInit() {

  this.sub = this.route.params.subscribe(params => {
    MyGlobal.LOADING = true;
      this.rptid =params['rptid'];
      if(this.rptid !=undefined)
      {
        var resultData:any;
          this.httpService.getDataforAg(this.rptid).subscribe(data=>
            
            {resultData=JSON.parse(data);
             this.RptPageHeading=resultData.RptPageHeading;
         this.RptDate=resultData.RptDate;
        this.RptHeader=resultData.RptHeader;
        this.RptTableData=resultData.RptData;
        MyGlobal.LOADING = false;
              },error=> { console.log(error)}
              
              );
            }
            else
            {
              this.reportLoadStatus="Report is not available";
            }
      
    });
         
  }


  onBtnExport(): void {
   
    const params = {
      columnGroups: true,
      allColumns: true,
      fileName: 'ftth.csv',
    };
       this.gridApi.exportDataAsCsv(params);
  }


  onGridReady(params) {
    
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
   onQuickFilterChanged(quickSearchValue:HTMLInputElement) {
    this.gridApi.setQuickFilter(quickSearchValue.value);
}
}



@Component({
  selector: 'app-ftth-wkg-rpt',
  templateUrl: './ftth-wkg-rpt.component.html'
})
export class FtthWkgRptComponent implements OnInit {
  
 // modules= [ClientSideRowModelModule,CsvExportModule];
  @ViewChild('agGrid',{static: true}) agGrid: AgGridAngular;

  private gridApi:GridApi;
  private gridColumnApi;
   defaultColDef:any;
   RptPageHeading:string;
  RptHeader:any;
  RptDate:string;
  RptTableData:any;
  rptid: string | undefined;
  private sub: any;
  reportLoadStatus:string="";

 
  constructor(private route: ActivatedRoute,private httpService:AppService, private keyvaluesort:keyValueSortService) { 
    
   this. defaultColDef={
    sortable: true,
    resizable: true,
    enableCellTextSelection:true
    
}
  }

  ngOnInit() {

  this.sub = this.route.params.subscribe(params => {
      this.rptid =params['rptid'];
      if(this.rptid !=undefined)
      {
        var resultData:any;
          this.httpService.getDataforAg(this.rptid).subscribe(data=>
            
            {MyGlobal.LOADING = true;
              resultData=JSON.parse(data);
             this.RptPageHeading=resultData.RptPageHeading;
         this.RptDate=resultData.RptDate;
       
        this.RptTableData=resultData.RptData;
        MyGlobal.LOADING = false;
              },error=> {console.log(error)}
              
              );
            }
            else
            {
              this.reportLoadStatus="Report is not available";
            }
      
    });



    this.RptHeader=[{"headerName": "MAINTENANCE_FRANCHISEE", "field": "MAINTENANCE_FRANCHISEE",pinned: 'left' },
    {"headerName":"Central", children:[{ "width":"75","headerName": "BB_V", "field": "GMC_BB_V"},
    {"width":"75","headerName": "BB", "field": "GMC_BB"},
    {"width":"75","headerName": "V", "field": "GMC_V"},
    {"width":"75","headerName": "T", "field": "GMC_T"}]}

    ,
    {"headerName":"North", children:[
    {"width":"75","headerName": "BB_V", "field": "GMN_BB_V"},
    {"width":"75","headerName": "BB", "field": "GMN_BB"},
    {"width":"75","headerName": "V", "field": "GMN_V"},
    {"width":"75","headerName": "T", "field": "GMN_T"}]},

    {"headerName":"South", children:[
    {"width":"75","headerName": "BB_V", "field": "GMS_BB_V"},
        {"width":"75","headerName": "BB", "field": "GMS_BB"},
        {"width":"75","headerName": "V", "field": "GMS_V"},
        {"width":"75","headerName": "T", "field": "GMS_T"}]},
        {"headerName":"West", children:[  
        {"width":"75","headerName": "BB_V", "field": "GMW_BB_V"},
        {"width":"75","headerName": "BB", "field": "GMW_BB"},
        {"width":"75","headerName": "V", "field": "GMW_V"},
        {"width":"75","headerName": "T", "field": "GMW_T"}]},
        {"width":"75","headerName": "FRANCHISEE_TOTAL", "field": "FRANCHISEE_TOTAL"}] 
         
  }


  onBtnExport(): void {
   
    const params = {
      columnGroups: true,
      allColumns: true,
      fileName: 'ftth.csv',
    };
       this.gridApi.exportDataAsCsv(params);
  }


  onGridReady(params) {
    
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
   onQuickFilterChanged(quickSearchValue:HTMLInputElement) {
    this.gridApi.setQuickFilter(quickSearchValue.value);
}
}


