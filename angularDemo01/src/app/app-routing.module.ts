import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaleComponent } from './components/sale/sale.component';
import { SaleHistoryComponent } from './components/sale-history/sale-history.component';

const routes: Routes = [

  {
    path: "sale", component: SaleComponent
  },
  {
    path: "sale-history", component: SaleHistoryComponent
  },

  //匹配不到路由的时候加载的组件 或者跳转的路由
  {
    path: "**", redirectTo: "sale"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
