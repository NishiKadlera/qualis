import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ReportFiltersComponent } from './report-filters/report-filters.component';
import { DataGroupComponent } from './data-group/data-group.component';
import { SearchdropdownComponent } from './searchdropdown/searchdropdown.component';
import { PageComponent } from './page/page.component';
import { GroupingComponent } from './grouping/grouping.component';
import { PrintGroupComponent } from './print-group/print-group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';




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
    SidenavComponent,
    ReportFiltersComponent,
    DataGroupComponent,
    SearchdropdownComponent,
    PageComponent,
    GroupingComponent,
    PrintGroupComponent
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class AppModule { }
