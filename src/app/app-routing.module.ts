import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componets/login/login.component';
import{RegisterPageComponent} from './componets/register-page/register-page.component';
import{PrivatePageComponent} from './componets/private-page/private-page.component';
import{NotFoundPageComponent} from './componets/not-found-page/not-found-page.component';

const routes: Routes = [
  //definimos las rutas
  	{path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterPageComponent},
    {path:'private',component:PrivatePageComponent},
    {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
