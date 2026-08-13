import { Routes } from '@angular/router';
import { Home } from './home';
import { Contacts } from './contacts';

export const routes: Routes = [
  { path: '', title: 'Главная', component: Home },
  { path: 'contacts', title: 'Контакты', component: Contacts },
  { path: '**', redirectTo: '' }
];
