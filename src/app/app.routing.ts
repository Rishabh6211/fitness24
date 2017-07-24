import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LoginComponent } from './login/login/login.component';
//import { RegistrationComponent } from './login/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [

{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
   {
        path: '',
        component:LayoutComponent,
        data: {
            title: 'Home'
          },
       children: [
        {
            path: 'home',
            loadChildren: './home/home.module#HomeModule'
        },
      ]
    }
  /*{
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
 
  },
   {
    path: 'registration',
    component: RegistrationComponent,
 
  }*/
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}