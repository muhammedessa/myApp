import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase ,FirebaseListObservable} from 'angularfire2/database';
import { HomePage } from '../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
 
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    
peopleList : FirebaseListObservable<any>;

constructor(public fire:AngularFireAuth,public navCtrl: NavController,public db: AngularFireDatabase) {
    
        fire.auth.onAuthStateChanged(function(user){
if(!user){
    navCtrl.setRoot(LoginPage)
}
        });
    
    
    this.peopleList = db.list('/people')
}
    
createPerson(name,lname,age,dept){
    this.peopleList.push({
        name : name,
        lname : lname,
        age : age,
        dept : dept,
        }).then(newPerson =>{
    this.navCtrl.push(HomePage);
    },error=>{console.log(error);});
}

}










