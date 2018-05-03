import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { APP_ROUTES } from './app.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFeedService } from './services/newsfeed.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { PostComponent } from './components/newsfeed/post/post.component';
import { PostFormComponent } from './components/newsfeed/post-form/post-form.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsfeedComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    FilterPipe,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NewsFeedService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
