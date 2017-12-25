import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidesPage } from '../pages/slides/slides';
import { TravelNotesPage } from '../pages/notes/notes';
import { PostPage } from '../pages/post/post';
import { DraftsPage } from '../pages/drafts/drafts'
import { NotePage } from '../pages/note/note'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserInfoService } from '../providers/UserInfoService';
import { StorageService } from '../providers/StorageService';
import { TravelNotesService } from '../providers/TravelNotesService';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignUpPage,
    ContactPage,
    HomePage,
    TabsPage,
    SlidesPage,
    TravelNotesPage,
    PostPage,
    DraftsPage,
    NotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignUpPage,
    ContactPage,
    HomePage,
    TabsPage,
    SlidesPage,
    TravelNotesPage,
    PostPage,
    DraftsPage,
    NotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserInfoService,
    StorageService,
    TravelNotesService
  ]
})
export class AppModule {}
