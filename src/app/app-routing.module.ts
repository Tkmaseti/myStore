import { CheckoutComponent } from './checkout/checkout.component';
import { FriendsComponent } from './friends/friends.component';
import { AdvertsComponent } from './adverts/adverts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'cart', component:CartComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: '', component:AdvertsComponent},
  { path: 'checkout', component:CheckoutComponent},
  { path: 'friends', component:FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

