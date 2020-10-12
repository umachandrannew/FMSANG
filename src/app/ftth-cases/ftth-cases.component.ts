import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{FtthInfoCasesComponent} from '../ftth-info-cases/ftth-info-cases.component';

@Component({
  selector: 'app-ftth-case-i',
  templateUrl: './ftth-case-i.component.html'
})
export class FtthCaseIComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-ii',
  templateUrl: './ftth-case-ii.component.html',
  
})
export class FtthCaseIIComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-iii',
  templateUrl: './ftth-case-iii.component.html',
  
})
export class FtthCaseIIIComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-iv',
  templateUrl: './ftth-case-iv.component.html',
  
})
export class FtthCaseIVComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-v',
  templateUrl: './ftth-case-v.component.html',
  
})
export class FtthCaseVComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-iia',
  templateUrl: './ftth-case-v.component.html',
  
})
export class FtthCaseIIAComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-ftth-case-iia',
  templateUrl: './ftth-case-iiia.component.html',
  
})
export class FtthCaseIIIAComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FtthInfoCasesComponent>
   ) {}

  oncloseClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}