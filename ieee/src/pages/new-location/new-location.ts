import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ConstantsProvider } from '../../providers/constants/constants';

/**
 * Generated class for the NewLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html',
})
export class NewLocationPage {
  latitude:any;
  longitude:any;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation,public toastCtrl: ToastController,
    public loadingCtrl: LoadingController, constants:ConstantsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewLocationPage');
    this.getGeoLocation();
  }
  getGeoLocation(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      loading.dismiss();
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
    }).catch((error) => {
      loading.dismiss();
      console.log('Error getting location', error);
    });
  }

}
