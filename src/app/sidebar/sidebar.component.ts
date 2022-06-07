
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
  Show1a: boolean=false;
  Show1(){
    this.Show1a=! this.Show1a;
  }
  Show2a: boolean=false;
  Show2(){
    this.Show2a=! this.Show2a;
  }
  Show3a: boolean=false;
  Show3(){
    this.Show3a=! this.Show3a;
  }
}



