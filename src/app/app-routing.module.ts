import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSUBearsComponent } from "./msubears/msubears.component";
import { FibComponent } from "./fib/fib.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  { path: 'msubears', component: MSUBearsComponent },
  { path: 'fib', component: FibComponent },
  { path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
