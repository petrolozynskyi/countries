import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CountryPageComponent } from '../components/country-page/country-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'country/:countryCode',
    component: CountryPageComponent,
    title: 'Country Details',
  },
];

export default routes;
