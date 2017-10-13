import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the EditPersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-person',
  templateUrl: 'edit-person.html',
})
export class EditPersonPage {
    
persons : FirebaseListObservable<any>;
    
person = {
    id:'',
    name:'',
    lname:'',
    age:'',
    dept:''
}

constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
    this.persons = db.list('/people');
    
    this.person.id  = this.navParams.get('key')
    this.person.name  = this.navParams.get('name')
    this.person.lname  = this.navParams.get('lname')
    this.person.age  = this.navParams.get('age')
    this.person.dept  = this.navParams.get('dept')
      
  
  }

updatePerson(id,name,lname,age,dept){
    this.persons.update(this.person.id, {
    
        name : this.person.name ,  
        lname : this.person.lname  ,
        age :this.person.age  ,
dept: this.person.dept  
        
}).then(uPerson =>{ this.navCtrl.pop();},error=>{console.log(error);});
}



}




