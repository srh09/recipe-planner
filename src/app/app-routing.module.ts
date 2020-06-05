import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', loadChildren: () => import('./user/user.module').then(module => module.UserModule) },
  { path: 'planner', loadChildren: () => import('./planner/planner.module').then(module => module.PlannerModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
