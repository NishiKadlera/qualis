import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule  } from  '@angular/material/toolbar';
import  { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReportsComponent } from './reports/reports.component';
import { TablerowsComponent } from './tablerows/tablerows.component';
import { StandardComponent } from './standard/standard.component';
import { SummaryComponent } from './summary/summary.component';
import { ShiftsummaryComponent } from './shiftsummary/shiftsummary.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FiltersComponent } from './filters/filters.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ReportsComponent,
    TablerowsComponent,
    StandardComponent,
    SummaryComponent,
    ShiftsummaryComponent,
    FiltersComponent,
    SidenavComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class AppModule { }
