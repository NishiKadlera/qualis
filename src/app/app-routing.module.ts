import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGroupComponent } from './data-group/data-group.component';
import { ReportFiltersComponent } from './report-filters/report-filters.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path:'reportfilter', component:ReportFiltersComponent},
  {path: 'breadcrumbs', component: SidebarComponent},
  // {path: 'datagroup', component:DataGroupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
