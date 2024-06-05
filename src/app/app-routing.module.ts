import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MovieComponent } from './movie/movie.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'movie/:id',component:MovieComponent},
  {path:'booking/:id',component:BookingComponent},
  {path:'admin',component:AdminComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
