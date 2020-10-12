import { Component, OnInit,ComponentRef } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import{FtthCaseIComponent,FtthCaseIIComponent,FtthCaseIIIComponent,FtthCaseIVComponent,FtthCaseVComponent,
  
  FtthCaseIIAComponent,  FtthCaseIIIAComponent } from '../ftth-cases/ftth-cases.component';

@Component({
  selector: 'app-ftth-info-cases',
  templateUrl: './ftth-info-cases.component.html',
  styleUrls: ['./ftth-info-cases.component.scss']
})
export class FtthInfoCasesComponent implements OnInit {

  modCom:any;

   constructor(public dialog: MatDialog){ }


  ngOnInit(): void {
  }

  openDialog(x) {

    switch(x)
    {
      case "i":
      {this.modCom=FtthCaseIComponent;break;}
      case "ii":
      {this.modCom=FtthCaseIIComponent;break;}
      case "iii":
      {this.modCom=FtthCaseIIIComponent;break;}
      case "iv":
      {this.modCom=FtthCaseIVComponent;break;}
      case "v":
      {this.modCom=FtthCaseVComponent;break;}
      case "iia":
      {this.modCom=FtthCaseIIAComponent;break;}
      case "iiia":
      {this.modCom=FtthCaseIIIAComponent;break;}
    }

    const dialogRef = this.dialog.open(this.modCom);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
