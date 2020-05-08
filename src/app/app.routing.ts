import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import {NavigationComponent} from './examples/navigation/navigation.component';
import { CanActiveGuard } from './service/can-active.guard';
import { CrudUComponent } from './examples/signup/crud-u/crud-u.component';
import { SessionGuard } from './service/session.guard';
import { ModificarComponent } from './examples/signup/crud-u/modificar/modificar.component';
import { EliminarComponent } from './examples/signup/crud-u/eliminar/eliminar.component';
import { EliminarCComponent } from './examples/signup/crud-u/eliminar-c/eliminar-c.component';



const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'navigation',       component: NavigationComponent },
    { path: 'user',             component: CrudUComponent, canActivate:[SessionGuard]},
    { path: 'update',           component: ModificarComponent, canActivate:[SessionGuard]},
    { path: 'delete',           component: EliminarCComponent, canActivate:[SessionGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
