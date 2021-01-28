import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { LoginComponent } from './login/login.component';
import { VotarComponent } from './votar/votar.component';


const routes: Routes = [
  {
    path:'', redirectTo:'/votar', pathMatch:'full'
  },
  {
    path:'finalizar', component:FinalizarComponent
  },
  {
    path:'votar', component:VotarComponent
  },
  {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
