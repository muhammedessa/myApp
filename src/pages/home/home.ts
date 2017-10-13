import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
 
import { LoginPage } from '../login/login';
 import { UserProfilePage } from '../user-profile/user-profile';

import { EditPersonPage } from '../edit-person/edit-person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    persons : FirebaseListObservable<any>;
    
constructor(public fire:AngularFireAuth,public navCtrl: NavController,public db:AngularFireDatabase) {
    fire.auth.onAuthStateChanged(function(user){
if(!user){
    navCtrl.setRoot(LoginPage)
}
        });
    
    this.persons = db.list('/people')
    
  }
    
deletePerson(id) {
    this.persons.remove(id);
}  
 
    
editPerson(id, name, lname, age,dept) {
   // console.log(  id, name,  lname, dept);
    this.navCtrl.push(EditPersonPage,{
    key : id,
    name : name,
    lname : lname,
   age : age,
    dept : dept
        });
    
}  
    
gotoProfile(){
    this.navCtrl.push(UserProfilePage);
} 

}





