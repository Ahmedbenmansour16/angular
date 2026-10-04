import { Component } from '@angular/core';

import { Header } from './compoments/header/header';
import { Navbar } from './compoments/navbar/navbar';
import { UserProfile } from './compoments/user-profile/user-profile';
import { Notification } from './compoments/notification/notification';
import { FriendsList } from './compoments/friends-list/friends-list';
import { Footer } from './compoments/footer/footer';
import { Conferencelist } from './compoments/conferencelist/conferencelist';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',


  imports: [
    Header,
    Navbar,
    UserProfile,
    Notification,
    FriendsList,
    Footer,
    Conferencelist,
    RouterOutlet
],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
