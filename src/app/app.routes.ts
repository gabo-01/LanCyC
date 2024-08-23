import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/User/login/login.component';
import { SingInComponent } from './components/User/sing-in/sing-in.component';

export const routes: Routes = [

{
    path:'Home',
    component: HomeComponent
},
{
    path:'Login',
    component: LoginComponent
},
{
    path:'SingIn',
    component: SingInComponent
},
{ 
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'

}

];
