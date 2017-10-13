import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
 import { HomePage } from '../home/home';
 import { UserProfilePage } from '../user-profile/user-profile';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase' 
 import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    
    
getInfo = {
    name :'',
    userPhoto: '',
    email : '',
    loggedin : false 
}
    

constructor(public storage:Storage ,public navCtrl: NavController , public fire:AngularFireAuth  ) {

  }
    
    
logIn() {
    this.navCtrl.push(LoginPage);
}
register() {
    this.navCtrl.push(RegisterPage);
}
logOut() {
    this.fire.auth.signOut();
 }
    
logInFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
      //  this.navCtrl.push(HomePage);
    console.log(res);
        
                        this.getInfo.name  = res.user.displayName;
                this.getInfo.userPhoto  = res.user.photoURL;
                this.getInfo.email   = res.user.email;
                this.getInfo.loggedin = true;          
this.storage.set('name', res.user.displayName); 
this.storage.set('userPhoto',  res.user.photoURL);  
this.storage.set('email', res.user.email);  
this.storage.set('loggedin', 'true');  
     this.navCtrl.push(UserProfilePage);   
        })
}
    
logInGoogle(){
        this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
//              this.navCtrl.push(HomePage);
    console.log(res);
            
                this.getInfo.name  = res.user.displayName;
                this.getInfo.userPhoto  = res.user.photoURL;
                this.getInfo.email   = res.user.email;
                this.getInfo.loggedin = true;          
this.storage.set('name', res.user.displayName); 
this.storage.set('userPhoto',  res.user.photoURL);  
this.storage.set('email', res.user.email);  
this.storage.set('loggedin', 'true');  
     this.navCtrl.push(UserProfilePage);   
            

            
            
            
//this.navCtrl.push(UserProfilePage,{
//    name :  this.getInfo.name   ,
//    userPhoto : this.getInfo.userPhoto  ,
//    email :  this.getInfo.email   ,
//   loggedin : this.getInfo.loggedin  
//    
//        });
        })
    
}   

    
logInTwitter(){
            this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => {
               //   this.navCtrl.push(HomePage);
    console.log(res);
                
                                this.getInfo.name  = res.user.displayName;
                this.getInfo.userPhoto  = res.user.photoURL;
                this.getInfo.email   = res.user.email;
                this.getInfo.loggedin = true;          
this.storage.set('name', res.user.displayName); 
this.storage.set('userPhoto',  res.user.photoURL);  
this.storage.set('email', res.user.email);  
this.storage.set('loggedin', 'true');  
     this.navCtrl.push(UserProfilePage);   
        })
}   
    
    
    
    
    
}
