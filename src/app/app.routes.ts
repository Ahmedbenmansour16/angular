import { Routes } from '@angular/router';
import { Conference } from './service/conference';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '**' ,redirectTo: 'home', pathMatch: 'full'},
    { path: '' ,component: Home },
    { path: 'conference' ,component:Conference },
];
