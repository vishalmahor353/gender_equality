import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DonateComponent } from './donate/donate.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
