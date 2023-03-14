import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './basic-table/portal/portal.component';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent }
]

@NgModule({
  declarations: [
    BasicTableComponent,
    PortalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }
