import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { EditPersonPage } from '../pages/edit-person/edit-person';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
 import { IonicStorageModule } from '@ionic/storage';

 import { Storage } from '@ionic/storage';


const  config = {
    apiKey: "AIzaSyBS2YanIsMVh0DjtBVPsM1OqMDIKBcDHw0",
    authDomain: "ionicdb-f4783.firebaseapp.com",
    databaseURL: "https://ionicdb-f4783.firebaseio.com",
    storageBucket: "ionicdb-f4783.appspot.com",
    messagingSenderId: "601471789612"
  };


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage,
      LoginPage,
      RegisterPage,
      UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  AngularFireModule.initializeApp(config),
     AngularFireDatabaseModule ,
      AngularFireAuthModule ,
       IonicStorageModule.forRoot()
       

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EditPersonPage,
            LoginPage,
      RegisterPage,
      UserProfilePage
  ],
  providers: [
   
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
