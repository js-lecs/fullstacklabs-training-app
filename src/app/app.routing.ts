import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ChatComponent } from './components/chat/chat.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: NewsfeedComponent
            },
            {
                path: 'chat',
                component: ChatComponent
            }
        ],
        canActivate: [],
        canDeactivate: []
    }
];
