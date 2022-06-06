
import {Component} from '@angular/core';

/** @title Basic sidenav */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  isShown: boolean = false ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}
isShown1: boolean = false ; // hidden by default
toggleShow1() {

  this.isShown1 = ! this.isShown1;
  
  }
  ShowMe: boolean=false;
  Show(){
    this.ShowMe=! this.ShowMe;
  }
}



