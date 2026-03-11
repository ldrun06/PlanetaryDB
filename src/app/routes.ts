import { Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomeComponent } from './home/home.component';
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Worlds DB',
    },
    {
      path: 'details-page/:id',
      component: DetailsPageComponent,
      title: 'World details',
    },
  ];
  export default routeConfig;