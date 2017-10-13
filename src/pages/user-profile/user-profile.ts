import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
    
    
    getInfo = {
    name :'',
    userPhoto: '',
    email : '',
    loggedin : false 
}

  constructor(
   public storage:Storage ,
  public navCtrl: NavController, 
  public navParams: NavParams) {
//    this.getInfo.name  = this.navParams.get('name')
//    this.getInfo.userPhoto  = this.navParams.get('userPhoto')
//    this.getInfo.email  = this.navParams.get('email')
//    this.getInfo.loggedin  = this.navParams.get('loggedin')
      
    this.storage.get('name').then((val) => {
         this.getInfo.name  = val;
  });      
      
     this.storage.get('userPhoto').then((val) => {
         this.getInfo.userPhoto  = val;
  });       
      
      this.storage.get('email').then((val) => {
         this.getInfo.email  = val;
  });      
   this.storage.get('loggedin').then((val) => {
         this.getInfo.loggedin  = val;
  });   
 
  
      
  
  }

  ionViewDidLoad() {
//   this.storage.get('userPhoto').then((val) => {
//    console.log('Your userPhoto is', val);
//  }); 
//   this.storage.get('email').then((val) => {
//    console.log('Your email is', val);
//  }); 
//   this.storage.get('loggedin').then((val) => {
//    console.log('Your loggedin is', val);
//  }); 
      
  }
    
    
    
    
   
    
    

}






