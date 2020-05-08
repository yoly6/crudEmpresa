import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CrudUComponent } from './signup/crud-u/crud-u.component';
import { AgregarComponent } from './signup/crud-u/agregar/agregar.component';
import { ModificarComponent } from './signup/crud-u/modificar/modificar.component';
import { EliminarCComponent } from './signup/crud-u/eliminar-c/eliminar-c.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        NavigationComponent,
        AgregarComponent,
        ModificarComponent,
        EliminarCComponent
    ]
})
export class ExamplesModule { }
