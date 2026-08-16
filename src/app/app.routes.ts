import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { TermsOfService } from './pages/terms-of-service/terms-of-service';

export const routes: Routes = [
  { path: '', title: 'zabrikosina', component: Home },
  { path: 'terms-of-service', title: 'zabrikosina', component: TermsOfService },
  { path: '**', redirectTo: '' },
];
