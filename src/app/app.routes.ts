import { Routes } from '@angular/router';
import { Home } from './home';
import { Contacts } from './contacts';
import { TermsOfService } from './terms-of-service';

export const routes: Routes = [
  { path: '', title: 'zabrikosina', component: Home },
  { path: 'contacts', title: 'Контакты', component: Contacts },
  { path: 'terms-of-service', title: 'zabrikosina', component: TermsOfService },
  { path: '**', redirectTo: '' }
];
