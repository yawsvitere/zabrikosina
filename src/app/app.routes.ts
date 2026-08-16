import { Routes } from '@angular/router';
import { Contacts } from './pages/contacts/contacts';
import { Home } from './pages/home/home';
import { TermsOfService } from './pages/terms-of-service/terms-of-service';

export const routes: Routes = [
  { path: '', title: 'zabrikosina', component: Home },
  { path: 'contacts', title: 'Контакты', component: Contacts },
  { path: 'terms-of-service', title: 'zabrikosina', component: TermsOfService },
  { path: '**', redirectTo: '' },
];
