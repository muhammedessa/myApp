import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPersonPage } from './edit-person';

@NgModule({
  declarations: [
    EditPersonPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPersonPage),
  ],
})
export class EditPersonPageModule {}
