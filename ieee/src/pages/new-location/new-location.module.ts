import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewLocationPage } from './new-location';
import { Geolocation } from '../../../node_modules/@ionic-native/geolocation';
import {GoogleMaps,GoogleMap} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    NewLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewLocationPage),
  ],
  providers:[
    Geolocation,
    GoogleMap,GoogleMaps
  ]
})
export class NewLocationPageModule {}
