import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


import {
  MatProgressBarModule
} from '@angular/material/progress-bar';
import { MyGlobal } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FTTH';
  //loading = false;

get loading()
{
  return MyGlobal.LOADING;
}



  constructor(private router: Router,  private myGlobal:MyGlobal) {
   this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
    });
    }

     navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        MyGlobal.LOADING = true;
      }
      if (event instanceof NavigationEnd) {
        MyGlobal.LOADING = false;
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        MyGlobal.LOADING = false;
      }
      if (event instanceof NavigationError) {
        MyGlobal.LOADING = false;
      }
    }

    ngOnInit() {
     this.myGlobal.BASIC_URL = window.location.origin+"/fms/";
      //this.myGlobal.BASIC_URL = "http://localhost:33309/";
    // this.myGlobal.BASIC_URL = "http://localhost/fmsnew/";
     
      }
}
